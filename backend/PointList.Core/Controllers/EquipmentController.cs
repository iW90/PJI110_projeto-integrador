using Microsoft.AspNetCore.Mvc;
using System.Linq;

[ApiController]
[Route("api/[controller]")]
public class EquipmentController : ControllerBase
{
    private readonly YourDbContext _context;

    public EquipmentController(YourDbContext context)
    {
        _context = context;
    }

    [HttpPost("add")]
    public IActionResult AddEquipment([FromBody] Equipment equipment)
    {
        if (equipment == null)
        {
            return BadRequest();
        }

        _context.Equipments.Add(equipment);
        _context.SaveChanges();

        return Ok();
    }
}
