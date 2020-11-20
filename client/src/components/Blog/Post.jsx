import post from "../../assets/Blog/post.png";

const Post = () => (
  <div className="post-container" style={{ marginTop: "10rem" }}>
    <h1 className="Post__title">LEARNINGS FROM LOCKDOWN</h1>
    <h2 className="Post__sub-title">BLOG / FOOD WASTE FACTS</h2>
    <img className="Post__head" src={post} />
    <body className="Post__content">
      That’s where Toast Ale steps in. Bakeries and sandwich manufacturers local
      to their breweries provide unsold bread to Toast, where it's turned into
      award-winning craft beer. From pale ales to IPAs, these brews are putting
      a dent in the staggering 24 million slices of bread that go to waste each
      day in the UK.
      <br />
      <br />
      ✔ Canned food
      <br />
      <br />
      Canned food goes through an extremely high heat process to kill bacteria
      and sterilise the contents. This makes canned food safe to eat years after
      the best before date.
      <br />
      Fun fact: Back in 1974, canned food found in the wreck of a boat that sank
      in 1865 was tested and although the food content had deteriorated in
      appearance, scientists said it was still safe to eat!
      <br /> ✔ Canned food
      <br />
      <br />
      Canned food goes through an extremely high heat process to kill bacteria
      and sterilise the contents. This makes canned food safe to eat years after
      the best before date.
      <br />
      Fun fact: Back in 1974, canned food found in the wreck of a boat that sank
      in 1865 was tested and although the food content had deteriorated in
      appearance, scientists said it was still safe to eat!
      <br />
    </body>
    <div className="Post__creater">
      <h3 className="Post__creater__name">Mariam Gogoladze</h3>
      <h2 className="Post__time">a month ago</h2>
    </div>
  </div>
);

export default Post;
