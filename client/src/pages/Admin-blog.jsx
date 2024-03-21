export const AdminBlog = () => {
  return (
    <>
      <section className="blog-section">
        <div className="container heading">
          <h1>Blog Data Form</h1>
        </div>
        <div className="blog-form container">
          <form>
            <div>
              <label htmlFor="image">Image</label>
              <input type="file" name="image" id="image" required />
            </div>
            <div>
              <label htmlFor="blogtitle">BlogTitle</label>
              <input
                type="text"
                name="blogtitle"
                id="blogtitle"
                required
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="blogdescription">BlogDescription</label>
              <input
                type="text"
                name="blogdescription"
                id="blogdescription"
                required
                autoComplete="off"
              />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
