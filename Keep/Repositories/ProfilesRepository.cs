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
      SELECT * 
      FROM keeps WHERE creatorId = @userId;
      ";
      return _db.Query<KeepPost>(sql, new { userId }).ToList();
    }
    internal List<KeepPost> GetAllProfileKeeps(string userId)
    {
      string sql = "SELECT * FROM keeps WHERE creatorId = @userId";
      return _db.Query<KeepPost>(sql, new { userId }).ToList();
    }

    internal List<Vault> GetPublicProfileVaults(string userId)
    {
      string sql = @"
      SELECT * FROM vaults WHERE creatorId = @userId AND isPrivate = false;
      ";
      return _db.Query<Vault>(sql, new { userId }).ToList();
    }

    internal List<Vault> GetMyVaults(string userId)
    {
      string sql = "SELECT * FROM vaults WHERE creatorId = @userId";
      return _db.Query<Vault>(sql, new { userId }).ToList();
    }
  }
}