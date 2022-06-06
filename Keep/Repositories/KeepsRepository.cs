using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using Keep.Models;

namespace Keep.Repositories
{
  public class KeepsRepository
  {
    private readonly IDbConnection _db;

    public KeepsRepository(IDbConnection db)
    {
      _db = db;
    }

    internal List<KeepPost> GetAll()
    {
      string sql = @"
      SELECT
      a.*,
      k.* 
      FROM keeps k
      JOIN accounts a ON k.creatorId = a.id;
      ";
      return _db.Query<Account, KeepPost, KeepPost>(sql, (a, k) =>
      {
        k.Creator = a;
        return k;
      }).ToList();
    }

    internal KeepPost Get(int id)
    {
      string sql = @"SELECT
      a.*,
      k.* 
      FROM keeps k
      JOIN accounts a ON k.creatorId = a.id
      WHERE k.id = @id";
      return _db.Query<Account, KeepPost, KeepPost>(sql, (a, k) =>
      {
        k.Creator = a;
        return k;
      }, new { id }).FirstOrDefault();
    }

    internal KeepPost Create(KeepPost keepData)
    {
      string sql = @"
      INSERT INTO keeps
      (name, description, img, shares, creatorId, views, kept)
      VALUES
      (@Name, @Description, @Img, @Shares, @CreatorId, @Views, @Kept);
      SELECT LAST_INSERT_ID();
      ";
      keepData.Id = _db.ExecuteScalar<int>(sql, keepData);
      return keepData;
    }

    internal KeepPost Edit(KeepPost original)
    {
      string sql = @"
      UPDATE keeps
      SET
        name = @Name,
        description = @Description,
        img = @Img,
        shares = @Shares
      WHERE id = @Id;
      ";
      _db.Execute(sql, original);
      return original;
    }

    internal void Delete(int id)
    {
      string sql = "DELETE FROM keeps WHERE id = @Id LIMIT 1";
      _db.Execute(sql, new { id });
    }

    internal KeepPost HandleViews(KeepPost original)
    {
      string sql = @"
      UPDATE keeps
      SET
        views = @Views
      WHERE id = @Id;
      ";

      _db.Execute(sql, original);
      return original;
    }

    // REVIEW seemingly redundant 
    internal List<VaultKeepViewModel> GetKeepsByVault(int id)
    {
      string sql = @"SELECT * FROM keeps WHERE vaultId = @id";
      return _db.Query<VaultKeepViewModel>(sql, new { id }).ToList();
    }
  }
}