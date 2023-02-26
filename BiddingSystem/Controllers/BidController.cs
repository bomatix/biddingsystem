using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BiddingSystem.Controllers
{

    [ApiController]
    [Route("/api/[controller]")]
    public class BidController : Controller
    {
        public static IList<Models.Bid> Bids = new List<Models.Bid>();

        [HttpPost]
        public IResult Post([FromBody] Models.Bid bid)
        {
            Bids.Add(bid);
            return Results.Ok();
        }

        [HttpDelete]
        public IActionResult Delete()
        {
            return View();
        }
    }
}

