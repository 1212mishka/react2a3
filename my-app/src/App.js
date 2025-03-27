import React, { useState } from "react";

const ReviewForm = () => {
  const [reviewText, setReviewText] = useState(""); // Контролируемый компонент
  const ratingRef = React.createRef(); // Неконтролируемый компонент
  const [submittedReview, setSubmittedReview] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const ratingValue = ratingRef.current.value;
    if (!reviewText.trim()) {
      alert("Отзыв не может быть пустым!");
      return;
    }
    setSubmittedReview({ text: reviewText, rating: ratingValue });
    setReviewText("");
    ratingRef.current.value = "1";
  };

  return (
    <div>
      <h2>Форма для відгуків</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Текст відгуку:</label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Оцінка:</label>
          <select ref={ratingRef} defaultValue="1">
            <option value="1">⭐</option>
            <option value="2">⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
          </select>
        </div>
        <button type="submit">Відправити</button>
      </form>

      {submittedReview && (
        <div>
          <h3>Ваш відгук:</h3>
          <p>{submittedReview.text}</p>
          <p>Оцінка: {submittedReview.rating} ⭐</p>
        </div>
      )}
    </div>
  );
};

export default ReviewForm;
