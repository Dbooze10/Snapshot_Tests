import React from "react"
import Card from "react-bootstrap/Card"

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src={Dbooze10} />
        {/* Source: https://github.com/Dbooze10 */}
        <Card.Body>
            <Card.Title>Desmond Booze</Card.Title>
            <Card.Text>
            My name is Desmond and I'm a Software Developer.
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard