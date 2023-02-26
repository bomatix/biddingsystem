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
        public IResult Delete([FromBody] Models.Bid bidToDelete)
        {
            Models.Offer? offer = OfferController.Offers.Where(offer => offer.IsOpen && offer.Id == bidToDelete.OfferId).FirstOrDefault();

            if (offer == null) return Results.Problem();

            Models.Bid? bid = Bids.Where(bid => bid.Id == bidToDelete.Id && bid.Password == bidToDelete.Password).FirstOrDefault();
            if (bid != null) {
                bool removed = Bids.Remove(bid);
                return removed ? Results.Ok() : Results.Problem();
            }
            return Results.Problem();
        }
    }
}

