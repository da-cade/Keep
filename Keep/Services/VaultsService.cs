using System;
using System.Collections.Generic;
using Keep.Models;
using Keep.Repositories;

namespace Keep.Services
{
  public class VaultsService
  {
    private readonly VaultsRepository _repo;

    public VaultsService(VaultsRepository repo)
    {
      _repo = repo;
    }

    internal List<Vault> GetAll()
    {
      List<Vault> vaults = _repo.GetAll();
      return vaults;
    }

    internal Vault Get(int id)
    {
      Vault vault = _repo.Get(id);
      if (vault == null)
      {
        throw new Exception("We couldn't find that vault.");
      }
      return vault;
    }

    internal Vault Get(int id, string userId)
    {
      Vault vault = Get(id);
      if (vault.IsPrivate == true && (userId != vault.CreatorId))
      {
        throw new Exception("FORBIDDEN");
      }
      return vault;
    }
    internal List<VaultKeepViewModel> GetVaultKeepsByVault(int id, string userId)
    {
      Vault vault = Get(id, userId);
      List<VaultKeepViewModel> vaultkeeps = _repo.GetVaultKeepsByVault(id);
      return vaultkeeps;
    }

    internal Vault Create(Vault vaultData)
    {
      Vault newVault = _repo.Create(vaultData);
      return newVault;
    }

    internal Vault Edit(Vault update, string userId)
    {
      Vault original = Get(update.Id);
      if (original.CreatorId != userId)
      {
        throw new Exception("You cannot edit that.");
      }
      original.Name = update.Name ?? original.Name;
      original.Description = update.Description ?? original.Description;
      original.IsPrivate = update.IsPrivate;

      _repo.Edit(original);
      return original;
    }

    internal void Delete(int id, string userId)
    {
      Vault found = Get(id);
      if (found.CreatorId != userId)
      {
        throw new Exception("You are not authorized to modify this data.");
      }
      _repo.Delete(id);
    }
  }
}