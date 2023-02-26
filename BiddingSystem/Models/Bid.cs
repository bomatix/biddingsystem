using System;
namespace BiddingSystem.Models
{
    public class Bid
    {
        private static int currentId = 0;
        public Bid()
        {
        }

        public int Id { get; set; }
        public int OfferId { get; set; }
        public string? Password { get; set; }
        public string Name { get; set; }
        public double amount { get; set; }
    }
}

