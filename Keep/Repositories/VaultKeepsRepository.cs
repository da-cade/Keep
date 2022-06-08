using System.Data;
using Dapper;
using Keep.Models;

namespace Keep.Repositories
{
  public class VaultKeepsRepository
  {
    private readonly IDbConnection _db;

    public VaultKeepsRepository(IDbConnection db)
    {
      _db = db;
    }
    internal VaultKeep Get(int id)
    {
      string sql = @"SELECT * FROM vaultkeeps WHERE id = @id;";
      return _db.QueryFirstOrDefault<VaultKeep>(sql, new { id });
    }

    internal VaultKeep Create(VaultKeep vaultkeepData)
    {
      string sql = @"
      INSERT INTO vaultkeeps
        (creatorId, vaultId, keepId)
      VALUES
        (@CreatorId, @VaultId, @KeepId);
      SELECT LAST_INSERT_ID();
      ";
      vaultkeepData.Id = _db.ExecuteScalar<int>(sql, vaultkeepData);
      return vaultkeepData;
    }


    internal void Delete(int id)
    {
      string sql = @"DELETE FROM vaultkeeps WHERE id = @Id LIMIT 1";
      _db.Execute(sql, new { id });
    }

    internal void HandleKept(KeepPost keep)
    {
      string sql = @"
      UPDATE keeps
      SET
        kept = @Kept
      WHERE id = @Id;
      ";
      _db.Execute(sql, keep);
    }
  }
}