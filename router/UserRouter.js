import express from 'express';
import { login,updateUsersPassword, updateUsersEmail, getUsers,createUsers,updateUsers,deleteUsers,getOneUser, getUsersAlphabetically, getUsersWithT} from '../controller/UserController.js';
import  {verifyToken}  from '../middleware/auth.js';
const rotuer = express.Router();
rotuer.get('/user', getUsers);
rotuer.get('/user/:id',verifyToken, getOneUser);

rotuer.get('/users/alphabetical', getUsersAlphabetically);
rotuer.get('/users/with-t', getUsersWithT)

rotuer.post('/register', createUsers);
rotuer.put('/user/:id',verifyToken, updateUsers);
rotuer.delete('/user/:id', verifyToken, deleteUsers);
rotuer.post('/login', login);
rotuer.put('/user/email/:id',verifyToken, updateUsersEmail);
rotuer.put('/user/password/:id',verifyToken, updateUsersPassword);
export const RouterUsuer = rotuer;
