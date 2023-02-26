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
        return Offers;
    }

    [HttpPost]
    public IResult Post([FromBody] Models.Offer offer)
    {
        Offers.Add(offer);
            return Results.Ok();
    }
}

