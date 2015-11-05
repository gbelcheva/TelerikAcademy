﻿namespace DateFirst.Models
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations.Schema;

    public class UserProfile
    {
        private ICollection<Image> images;
        private ICollection<Post> posts;
        private ICollection<Notification> notifications;

        public UserProfile()
        {
            this.Images = this.images;
            this.Posts = this.posts;
            this.Notifications = this.notifications;
        }

        public int Id { get; set; }

        [Index]
        public int Flirts { get; set; }

        public virtual AdditionalInfo AdditionalInfo { get; set; }

        [Index]
        public virtual Gender Gender { get; set; }

        public virtual User User { get; set; }

        public virtual Town Town { get; set; }

        public virtual Department Department { get; set; }

        public virtual ICollection<Image> Images
        {
            get { return this.images; }
            set { this.images = value; }
        }

        public virtual ICollection<Post> Posts
        {
            get { return this.posts; }
            set { this.posts = value; }
        }

        public virtual ICollection<Notification> Notifications
        {
            get { return this.notifications; }
            set { this.notifications = value; }
        }
    }
}
