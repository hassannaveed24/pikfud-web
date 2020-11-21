import { useHistory } from "react-router-dom";

const Posts = () => {
  const history = useHistory();
  const routeChange = () => {
    let path = "/blogpost";
    history.push(path);
  };
  return (
    <div className="content-container is-blog">
      <div className="Blog__posts">
        <div className="Blog__post" onClick={routeChange}>
          <h1>TIPS AND TRICKS</h1>
          <h2>How to motivate your restaurant staff to waste less food</h2>
          <h3>4 DAYS AGO | MARIAM GOGOLADZE</h3>
        </div>

        <div className="Blog__post">
          <h1>TIPS AND TRICKS</h1>
          <h2>How to motivate your restaurant staff to waste less food</h2>
          <h3>4 DAYS AGO | MARIAM GOGOLADZE</h3>
        </div>
        <div className="Blog__post">
          <h1>TIPS AND TRICKS</h1>
          <h2>How to motivate your restaurant staff to waste less food</h2>
          <h3>4 DAYS AGO | MARIAM GOGOLADZE</h3>
        </div>
        <div className="Blog__post">
          <h1>TIPS AND TRICKS</h1>
          <h2>How to motivate your restaurant staff to waste less food</h2>
          <h3>4 DAYS AGO | MARIAM GOGOLADZE</h3>
        </div>
        <div className="Blog__post">
          <h1>TIPS AND TRICKS</h1>
          <h2>How to motivate your restaurant staff to waste less food</h2>
          <h3>4 DAYS AGO | MARIAM GOGOLADZE</h3>
        </div>
        <div className="Blog__post">
          <h1>TIPS AND TRICKS</h1>
          <h2>How to motivate your restaurant staff to waste less food</h2>
          <h3>4 DAYS AGO | MARIAM GOGOLADZE</h3>
        </div>
        <div className="Blog__post">
          <h1>TIPS AND TRICKS</h1>
          <h2>How to motivate your restaurant staff to waste less food</h2>
          <h3>4 DAYS AGO | MARIAM GOGOLADZE</h3>
        </div>
      </div>
    </div>
  );
};
export default Posts;
