using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace BiddingSystem.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class OfferController : Controller
{
    private static List<Models.Offer> Offers = new List<Models.Offer>();

    [HttpGet]
    public IEnumerable<Models.Offer> Get()
    {
        return Offers.Where(offer => offer.IsOpen);
    }

    [HttpPost]
    public IResult Post([FromBody] Models.Offer offer)
    {
        Offers.Add(offer);
            return Results.Ok();
    }

    [HttpGet("{id}")]
    public OfferWithBids Get(int id)
    {
        Models.Offer offer = Offers.Where(offer => offer.Id == id).First();
        IEnumerable<Models.Bid> bids = BidController.Bids.Where(bid => bid.OfferId == id);
        var result = new OfferWithBids(offer: offer, bids: bids);
        return result;
    }
}

public class OfferWithBids
{
    public Models.Offer Offer { get; set; }
    public IEnumerable<Models.Bid> Bids { get; set; }

    public OfferWithBids(Models.Offer offer, IEnumerable<Models.Bid> bids)
    {
        Offer = offer;
        Bids = bids;
    }
}

