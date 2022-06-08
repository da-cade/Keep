using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using Keep.Models;

namespace Keep.Repositories
{
  public class ProfilesRepository
  {
    private readonly IDbConnection _db;

    public ProfilesRepository(IDbConnection db)
    {
      _db = db;
    }
    internal List<Profile> GetAll()
    {
      string sql = @"
        SELECT * FROM accounts;
      ";
      return _db.Query<Profile>(sql).ToList();
    }

    internal Profile Get(string id)
    {
      string sql = "SELECT * FROM accounts WHERE id = @id";
      Profile profile = _db.QueryFirstOrDefault<Profile>(sql, new { id });
      return profile;
    }

    internal List<KeepPost> GetPublicProfileKeeps(string userId)
    {
      string sql = @"
      SELECT 
      a.*,
      k.* 
      FROM keeps k
      JOIN accounts a ON k.creatorId = a.id
      WHERE creatorId = @userId;
      ";
      return _db.Query<Account, KeepPost, KeepPost>(sql, (a, k) =>
      {
        k.Creator = a;
        return k;
      }, new { userId }).ToList();
    }
    internal List<KeepPost> GetAllProfileKeeps(string userId)
    {
      string sql = @"SELECT
      a.*,
      k.*
      FROM keeps k
      JOIN accounts a ON k.creatorId = k.id
      WHERE creatorId = @userId";
      return _db.Query<Account, KeepPost, KeepPost>(sql, (a, k) =>
      {
        k.Creator = a;
        return k;
      }, new { userId }).ToList();
    }

    internal List<VaultKeep> GetVaultKeepsByProfile(string accountId)
    {
      string sql = @"SELECT
      v.*,
      vk.*
      FROM vaultkeeps vk
      JOIN vaults v ON vk.vaultId = v.id
      WHERE v.isPrivate = false AND vk.creatorId = @accountId";
      return _db.Query<VaultKeep>(sql, new { accountId }).ToList();
    }

    internal List<Vault> GetPublicProfileVaults(string userId)
    {
      string sql = @"
      SELECT
      a.*,
      v.*
      FROM vaults v
      JOIN accounts a ON v.creatorId = a.id
      WHERE creatorId = @userId AND isPrivate = false;
      ";
      return _db.Query<Account, Vault, Vault>(sql, (a, v) =>
      {
        v.Creator = a;
        return v;
      }, new { userId }).ToList();
    }

    internal List<Vault> GetMyVaults(string userId)
    {
      string sql = @"SELECT
      a.*,
      v.*
      FROM vaults v
      JOIN accounts a ON v.creatorId = a.id
      WHERE creatorId = @userId";
      return _db.Query<Account, Vault, Vault>(sql, (a, v) =>
      {
        v.Creator = a;
        return v;
      }, new { userId }).ToList();
    }
  }
}