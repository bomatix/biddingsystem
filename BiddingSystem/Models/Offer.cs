using System;
using System.Text.Json.Serialization;

namespace BiddingSystem.Models
{
    public class Offer
    {
        private static int currentId = 0;

        [JsonConstructor]
        public Offer(string title, string description, double price, string password)
        {
            Title = title;
            Description = description;
            Price = price;
            Password = password;
            IsOpen = true;
            Id = currentId++;
        }

        public Offer(Offer offer)
        {
            Title = offer.Title;
            Description = offer.Description;
            Price = offer.Price;
            Id = offer.Id;
            IsOpen = offer.IsOpen;
            SelectedBidId = offer.SelectedBidId;
        }

        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public double Price { get; set; }

        public string? Password { get; set; }

        public bool IsOpen { get; set; }

        public int? SelectedBidId { get; set; }
    }
}

