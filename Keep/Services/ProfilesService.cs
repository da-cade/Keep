using System;
using System.Collections.Generic;
using Keep.Models;
using Keep.Repositories;

namespace Keep.Services
{
  public class ProfilesService
  {
    private readonly ProfilesRepository _repo;
    public ProfilesService(ProfilesRepository repo)
    {
      _repo = repo;
    }

    internal List<Profile> GetAll()
    {
      List<Profile> profiles = _repo.GetAll();
      return profiles;
    }

    internal Profile Get(string id)
    {
      Profile profile = _repo.Get(id);
      if (profile == null)
      {
        throw new Exception("That profile could not be found");
      }
      return profile;
    }

    internal List<KeepPost> GetKeepsByProfile(string accountId, string userId)
    {
      Profile found = Get(accountId);
      List<KeepPost> keeps = _repo.GetPublicProfileKeeps(accountId);
      return keeps;
    }

    internal List<Vault> GetVaultsByProfile(string accountId, string userId)
    {
      List<Vault> vaults = _repo.GetPublicProfileVaults(accountId);
      return vaults;

    }
    internal List<Vault> GetMyVaults(string userId)
    {
      List<Vault> vaults = _repo.GetMyVaults(userId);
      return vaults;
    }
  }
}