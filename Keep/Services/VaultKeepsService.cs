using System;
using Keep.Models;
using Keep.Repositories;

namespace Keep.Services
{
  public class VaultKeepsService
  {
    private readonly VaultKeepsRepository _repo;
    private readonly VaultsService _vs;
    private readonly KeepsService _ks;

    public VaultKeepsService(VaultKeepsRepository repo, VaultsService vs, KeepsService ks)
    {
      _repo = repo;
      _vs = vs;
      _ks = ks;
    }

    internal VaultKeep Get(int id)
    {
      VaultKeep vaultkeep = _repo.Get(id);
      return vaultkeep;
    }

    internal VaultKeep Create(VaultKeep vaultkeepData)
    {
      Vault vault = _vs.Get(vaultkeepData.VaultId);
      if (vault == null)
      {
        throw new Exception("That vault doesn't exist.");
      }
      if (vault.CreatorId != vaultkeepData.CreatorId)
      {
        throw new Exception("You are not authorized to create this data");
      }
      KeepPost keep = _ks.Get(vaultkeepData.KeepId);
      keep.Kept++;
      _repo.HandleKept(keep);

      return _repo.Create(vaultkeepData);

    }

    internal void Delete(int id, string userId)
    {
      VaultKeep found = _repo.Get(id);
      if (found == null)
      {
        throw new Exception("We couldn't find that record.");
      }
      if (userId != found.CreatorId)
      {
        throw new Exception("You are not authorized to delete this data.");
      }
      KeepPost keep = _ks.Get(found.KeepId);
      keep.Kept--;
      _repo.HandleKept(keep);

      _repo.Delete(id);
    }

  }
}