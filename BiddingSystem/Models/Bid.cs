using System;
using System.Text.Json.Serialization;

namespace BiddingSystem.Models
{
    public class Bid
    {
        private static int currentId = 0;

        [JsonConstructor]
        public Bid(int offerId, string buyerName, double amount, string password)
        {
            Id = currentId++;
            OfferId = offerId;
            BuyerName = buyerName;
            Amount = amount;
            Password = password;
        }

        public Bid(Bid bid)
        {
            Id = bid.Id;
            OfferId = bid.OfferId;
            BuyerName = bid.BuyerName;
            Amount = bid.Amount;
        }

        public int Id { get; set; }
        public int OfferId { get; set; }
        public string? Password { get; set; }
        public string BuyerName { get; set; }
        public double Amount { get; set; }
    }
}

