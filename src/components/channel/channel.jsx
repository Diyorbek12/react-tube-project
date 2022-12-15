import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Channel() {
  return (
    <Link to={'/'} style={{textDecoration: 'none'}}>
        <Button variant="contained">Main</Button>
    </Link>
  )
}
