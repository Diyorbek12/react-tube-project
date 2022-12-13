import { Button } from "@mui/material"
import { Link } from "react-router-dom"

export default function main() {
  return (
    <Link to={'/Channel'} style={{textDecoration: 'none'}}>
      <Button variant="contained">Channel</Button>
    </Link>
  )
}