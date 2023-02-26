using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BiddingSystem.Controllers
{

    /// <summary>
    /// Controller used for managing bids.
    /// </summary>
    [ApiController]
    [Route("/api/[controller]")]
    public class BidController : Controller
    {
        /// <summary>
        /// List containing all added bids, that acts as a database.
        /// </summary>
        public static IList<Models.Bid> Bids = new List<Models.Bid>();

        [HttpPost]
        public IResult Post([FromBody] Models.Bid bid)
        {
            Bids.Add(bid);
            return Results.Ok();
        }

        [HttpDelete]
        public IResult Delete([FromBody] DeleteBidParams parameters)
        {
            Models.Bid? bid = Bids.Where(bid => bid.Id == parameters.Id && bid.Password == parameters.Password).FirstOrDefault();
            if (bid == null)
            {
                return Results.Problem();
            }

            Models.Offer? offer = OfferController.Offers.Where(offer => offer.IsOpen && offer.Id == bid.OfferId).FirstOrDefault();

            if (offer == null) return Results.Problem();

            bool removed = Bids.Remove(bid);
            return removed ? Results.Ok() : Results.Problem();
        }
    }

    public class DeleteBidParams
    {
        public int Id { get; set; }
        public string Password { get; set; }
    }
}

