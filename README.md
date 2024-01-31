# Welcome to DineDiscover

Live Link: https://dinediscover.onrender.com/

### What is DineDiscover?

DineDiscover is an online platform designed for users to explore restaurants, share reviews, and access ratings effortlessly. The inspiration behind DineDiscover stemmed from a passion for food and a love for dining out. The goal is to provide a user-friendly website that simplifies the process of discovering exciting new restaurants. As a dedicated food enthusiast, I aimed to create a space where people can easily find their ideal dining spot and share their culinary experiences.

> ![How It looks](/app/assets/images/dine.gif)

### Components

# Reviews
DineDiscover users can easily share their dining experiences by writing reviews with ratings and multiple pictures. The latest reviews will appear on the front page, and if a user has already written a review for a restaurant, it will show up at the top of the review section for convenience.

```js
//handling image files
const handleFiles = ({ currentTarget }) => {
  const files = currentTarget.files;

  setImageFiles(files);
  if (files.length !== 0) {
    let filesLoaded = 0;
    const urls = [];
    Array.from(files).forEach((file, index) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        urls[index] = fileReader.result;

        if (++filesLoaded === files.length) setImageUrls(urls);
      };
    });
  } else setImageUrls([]);
};
```

# Rating

DineDiscover user leaves a rating for a restaurant, DineDiscover automatically updates the restaurant's overall rating to reflect the new feedback. This ensures that users have access to the most accurate and up-to-date restaurant ratings possible.

```javascript
//Star rating component
{
  [...Array(5)].map((star, i) => {
    i += 1;
    return (
      <button
        key={i + 99}
        className={i <= rating ? "on" : "off"}
        onMouseEnter={() => setRating(i)}
        onMouseLeave={() => setHover(rating)}
      >
        <i className="fa-solid fa-star"></i>
      </button>
    );
  });
}
```

```ruby
#when reviews is deleted it updates the restaurant's ratings
 def destroy
    @review = Review.find(params[:id])
    @business = Business.find(@review.business_id)
    @review.destroy
    @business.update_average_rating
    render "/api/businesses/show"
  end
```

```ruby
#when review is successfully saved it updates the restaurant's rating

    if @review.save
      @review.business.update_average_rating
      render :create
    else
      render json: @review.errors.full_messages, status: 422
    end
  end
```

### Tech Stack
- JavaScript, HTML, Ruby, and CSS coding languages
- [React](https://react.dev/), [Redux](https://react-redux.js.org/) for frontend
- [Ruby on Rails](https://rubyonrails.org/) for backend
- [PostgreSQL](https://www.postgresql.org/) as database
- [AWS S3](https://aws.amazon.com/) to store and render every photo in this app
- [Render](https://render.com/) to host this app online
- [FontAwesome](https://fontawesome.com/) for icons used on Roominate

### Highlights!

## Searching
The search function can be done through a search bar or through a dropdown menu of premade options

> ![Searching](/app/assets/images/search.gif)

### Future Implementations
- Adding Price Ranges to restaurants as another way to filter
- Adding GoogleMaps API as a way to find the location of the restaurant
