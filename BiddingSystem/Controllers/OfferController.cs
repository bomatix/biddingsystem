using Microsoft.AspNetCore.Mvc;

namespace BiddingSystem.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class OfferController : Controller
{
    private static readonly IEnumerable<Models.Offer> Offers = new List<Models.Offer> {
        new Models.Offer(title: "First offer", description: "Description of the first offer", price: 3, password: "asdf"),
        new Models.Offer(title: "Second offer", description: "Description of the second offer", price: 4, password: "asdf"),
        new Models.Offer(title: "Third offer", description: "Description of the thirs offer", price: 5, password: "asdf")
    };

    private readonly ILogger<OfferController> _logger;

    public OfferController(ILogger<OfferController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<Models.Offer> Get()
    {
        return Offers;
    }
}

