using System.Collections.Generic;
using System.Data;
using System.Linq;
using Dapper;
using Keep.Models;

namespace Keep.Repositories
{
  public class VaultsRepository
  {
    private readonly IDbConnection _db;

    public VaultsRepository(IDbConnection db)
    {
      _db = db;
    }

    internal List<Vault> GetAll()
    {
      string sql = @"
      SELECT 
      a.*,
      v.*
      FROM vaults v
      JOIN accounts a ON v.creatorId = a.id";
      return _db.Query<Account, Vault, Vault>(sql, (a, v) =>
      {
        v.Creator = a;
        return v;
      }).ToList();
    }

    internal Vault Get(int id)
    {
      string sql = @"
      SELECT 
      a.*,
      v.*
      FROM vaults v
      JOIN accounts a ON v.creatorId = a.id
      WHERE v.id = @id";
      return _db.Query<Account, Vault, Vault>(sql, (a, v) =>
      {
        v.Creator = a;
        return v;
      }, new { id }).FirstOrDefault();
    }

    internal List<VaultKeepViewModel> GetVaultKeepsByVault(int id)
    {
      string sql = @"
      SELECT 
      a.*,
      k.*,
      vk.id AS vaultkeepId 
      FROM vaultkeeps vk
      JOIN accounts a ON vk.creatorId = a.id
      JOIN keeps k ON vk.keepId = k.id
      WHERE vk.vaultId = @id
      ";
      return _db.Query<Account, VaultKeepViewModel, VaultKeepViewModel>(sql, (a, vk) =>
      {
        vk.Creator = a;
        return vk;
      }, new { id }).ToList();
    }

    internal Vault Create(Vault vaultData)
    {
      string sql = @"
      INSERT INTO vaults
        (name, description, creatorId, isPrivate)
      VALUES
        (@Name, @Description, @CreatorId, @IsPrivate);
      SELECT LAST_INSERT_ID();
      ";
      vaultData.Id = _db.ExecuteScalar<int>(sql, vaultData);
      return vaultData;
    }

    internal Vault Edit(Vault original)
    {
      string sql = @"
      UPDATE vaults
      SET
        name = @Name,
        description = @Description,
        isPrivate = @IsPrivate
      WHERE id = @Id;
      ";
      _db.Execute(sql, original);
      return original;
    }

    internal void Delete(int id)
    {
      string sql = "DELETE FROM vaults WHERE id = @Id LIMIT 1";
      _db.Execute(sql, new { id });
    }
  }
}