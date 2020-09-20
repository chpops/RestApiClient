using System.ComponentModel.DataAnnotations;

namespace SmallApp.Models
{
  public class AccountData
  {
    [Required]
    [StringLength(16 , ErrorMessage = "The Account Login value cannot exceed 16 characters. ")]
    public string Login { get; set; }

    [Required]
    [StringLength(12 , ErrorMessage = "The Account Password value cannot exceed 12 characters. ")]
    public string Password { get; set; }

    [StringLength(16 , ErrorMessage = "The Account Email value cannot exceed 16 characters. ")]
    public string Email { get; set; }

 //   public enum Permissions : ushort
	//{
 //     User = 0,
 //     Admin = 1,
 //     SuperAdmin = 2
	//}
  }
}
