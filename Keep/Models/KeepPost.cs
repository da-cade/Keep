using System;

namespace Keep.Models
{
  public class KeepPost
  {
    public int Id { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public string CreatorId { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string Img { get; set; }
    public int Views { get; set; }
    public int Kept { get; set; }
    public int Shares { get; set; }
    public Account Creator { get; set; }
  }
  public class VaultKeepViewModel : KeepPost
  {
    public int VaultKeepId { get; set; }
  }
}