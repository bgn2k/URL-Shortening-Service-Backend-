import express from 'express'
import { handleGenerateNewShortURL, handleGetRedirectId} from '../controller/url.js'
const router = express.Router()
router.post('/',handleGenerateNewShortURL)
router.get('/:id', handleGetRedirectId)
export default router