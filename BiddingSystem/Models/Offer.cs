using System;
namespace BiddingSystem.Models
{
    public class Offer
    {
        public Offer(string title, string description, double price, string password)
        {
            Title = title;
            Description = description;
            Price = price;
            Password = password;
            IsOpen = true;
        }

        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public double Price { get; set; }

        public string? Password { get; set; }

        public bool IsOpen { get; set; }
    }
}

