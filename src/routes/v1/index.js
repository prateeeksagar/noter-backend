import { Router } from "express";

const router = Router();

//API Routes Creation
router.get('/check',() => {
    console.log("this is check working");
})






export { router as v1ApiRoutes  }