using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace BiddingSystem.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class OfferController : Controller
{
    public static List<Models.Offer> Offers = new List<Models.Offer>();

    [HttpGet]
    public IEnumerable<Models.Offer> Get()
    {
        return Offers.Where(offer => offer.IsOpen).Select(offer => new Models.Offer(offer));
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
        Models.Offer offer = Offers.Where(offer => offer.Id == id).Select(offer => new Models.Offer(offer)).First();
        IEnumerable<Models.Bid> bids = BidController.Bids.Where(bid => bid.OfferId == id).Select(bid => new Models.Bid(bid));
        var result = new OfferWithBids(offer: offer, bids: bids);
        return result;
    }

    [HttpPut]
    [Route("/api/offer/close")]
    public IResult Close([FromBody] CloseOfferParams parameters)
    {
        Models.Offer? offer = Offers.Where(offer => offer.Id == parameters.Id && offer.Password == parameters.Password).FirstOrDefault();
        if (offer == null) return Results.Problem();

        offer.IsOpen = false;
        offer.SelectedBidId = parameters.SelectedBidId;
        return Results.Ok();
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

public class CloseOfferParams
{
    public int Id { get; set; }
    public int SelectedBidId { get; set; }
    public string Password { get; set; }
}

