using System;
using System.Collections.Generic;
using Keep.Models;
using Keep.Repositories;

namespace Keep.Services
{
  public class KeepsService
  {
    private readonly KeepsRepository _repo;

    public KeepsService(KeepsRepository repo)
    {
      _repo = repo;
    }

    internal List<KeepPost> GetAll()
    {
      List<KeepPost> keeps = _repo.GetAll();
      return keeps;
    }

    internal List<VaultKeepViewModel> GetKeepsByVault(int id)
    {
      List<VaultKeepViewModel> vaults = _repo.GetKeepsByVault(id);
      return vaults;
    }

    internal KeepPost Get(int id)
    {
      KeepPost keep = _repo.Get(id);
      if (keep == null)
      {
        throw new Exception("We couldn't find that keep");
      }
      return keep;
    }

    internal KeepPost Create(KeepPost keepData)
    {
      KeepPost newKeep = _repo.Create(keepData);
      return newKeep;
    }

    internal KeepPost Edit(KeepPost update, string userId)
    {
      KeepPost original = _repo.Get(update.Id);
      if (original == null)
      {
        throw new Exception("We couldn't find that Keep");
      }
      if (original.CreatorId != userId)
      {
        throw new Exception("You cannot edit that.");
      }
      original.Name = update.Name ?? original.Name;
      original.Description = update.Description ?? original.Description;
      original.Img = update.Img ?? original.Img;
      // REVIEW this might not be the best way to handle incrementing shares. 
      original.Shares = update.Shares;

      _repo.Edit(original);
      return original;
    }

    internal void Delete(int id, string userId)
    {
      KeepPost found = Get(id);
      if (found == null)
      {
        throw new Exception("We couldn't find that Keep");
      }
      if (found.CreatorId != userId)
      {
        throw new Exception("You are not authorized to modify this data.");
      }
      _repo.Delete(id);
    }

    // REVIEW this 
    internal KeepPost HandleViews(int keepId)
    {
      KeepPost original = Get(keepId);
      original.Views++;
      return _repo.HandleViews(original);
    }
  }
}