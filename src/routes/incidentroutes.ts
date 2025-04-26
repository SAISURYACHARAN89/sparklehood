import { Router } from "express";
import { 
  fetchIncident, 
  newIncident, 
  fetchSpecificIncident, 
  deleteIncident 
} from "../controllers/incidentContoller";
import validateIncident  from "../middlewares/validateIncident";

const router = Router();

router.get("/incidents", fetchIncident);
router.post("/incidents", validateIncident, newIncident);
router.get("/incidents/:id", fetchSpecificIncident);
router.delete("/incidents/:id", deleteIncident);

export default router;