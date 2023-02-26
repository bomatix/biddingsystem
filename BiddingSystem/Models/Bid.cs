using System;
namespace BiddingSystem.Models
{
    public class Bid
    {
        private static int currentId = 0;
        public Bid(int offerId, string buyerName, double amount, string password)
        {
            Id = currentId++;
            OfferId = offerId;
            BuyerName = buyerName;
            Amount = amount;
            Password = password;
        }

        public int Id { get; set; }
        public int OfferId { get; set; }
        public string? Password { get; set; }
        public string BuyerName { get; set; }
        public double Amount { get; set; }
    }
}

