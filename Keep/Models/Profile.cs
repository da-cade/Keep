using System;

namespace Keep.Models
{
  public class Profile
  {
    public string Id { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public string Name { get; set; }
    public string Picture { get; set; }
    public string Bio { get; set; }
    public string Hobbies { get; set; }
  }
  public class Account : Profile
  {
    public string Email { get; set; }
  }
}