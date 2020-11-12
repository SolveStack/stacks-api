// import { Router } from 'express';
// import { UserComponent, StackComponent } from '../components';
// /**
//  * @constant {express.Router}
//  */
// const router: Router = Router();
// /** 
//  * POST method route
//  * @example http://localhost:PORT/v1/stacks
//  * 
//  * @swagger
//  * /v1/stacks:
//  *   post:
//  *      description: Create new Stack
//  *      tags: ["stacks"]
//  *      security:
//  *       - ApiKeyAuth: []
//  *      requestBody:
//  *        description: stack creation request body
//  *        required: true
//  *        content:
//  *          application/json:
//  *            schema: 
//  *              $ref: '#/components/schemas/StackSchema'
//  *            example: {
//  *              name: stackName
//  *              wikipediaLink: https://en.wikipedia.com/stack
//  *                  }
//  *      responses:
//  *        201:
//  *          description: return created stack
//  *          content:
//  *            application/json:
//  *              schema:
//  *                oneOf:
//  *                  - $ref: '#/components/schemas/StackSchema'
//  *                  example: {
//  *                              "_id": "5fad88480ed2840b17a3c94d",
//  *                               "name": "stackName",
//  *                               "wikipediaLink": "https://en.wikipedia.com/stack"
//  *                            }
//  *        default:
//  *          description: unexpected error
//  *          content:
//  *            application/json:
//  *              schema:
//  *                $ref: '#/components/schemas/Error'
//  */
// router.post("/", StackComponent.create);
// /**
//  * GET method route 
//  * @example http://localhost:PORT/v1/stacks
//  * 
//  * @swagger
//  * /v1/stacks:
//  *   get:
//  *     description: Get all stored stacks in Database
//  *     tags: ["stacks"]
//  *     security:
//  *      - ApiKeyAuth: []
//  *     responses:
//  *       200:
//  *         description: An array of stacks
//  *         content:
//  *           application/json:
//  *             schema: 
//  *                  oneOf:
//  *                       - $ref: '#/components/schemas/Stacks'
//  *               example:                [
// *                   {
// *                        "_id": "5fad82b40ed2840b17a3c94b",    
//  *                       "name": "stackName",
// *                        "wikipediaLink": "https://en.wikipedia.com/stack"
// *                    },
// *                    {
// *                        "_id": "5fad82b40ed2840b17a3c94b",
// *                        "name": "stackTwo",
// *                       "wikipediaLink": "https://en.wikipedia.com/stackTwo"
// *                    }
// *                ]
//  *       default:
//  *          description: unexpected error
//  *          content:
//  *            application/json:
//  *              schema:
//  *                $ref: '#/components/schemas/Error'
// */
// router.get('/', StackComponent.findAll);
// /**
//  * GET method route 
//  * @example http://localhost:PORT/v1/stacks:id
// * @swagger
//  * /v1/stacks/{id}:
//  *  get:
//  *    description: Get stack by stackId
//  *    tags: ["stacks"]
//  *    security:
//  *      - ApiKeyAuth: []
//  *    parameters:
//  *      - in: path
//  *        name: id
//  *        description: the unique stackId
//  *        required: true
//  *        schema:
//  *          type: string
//  *        example: http://localhost:3000/v1/stacks/5fad43dd35fd7a038acc1cfc
//  *    responses:
//  *      200:
//  *        description: return stack by id
//  *        content:
//  *          application/json:
//  *            schema:
//  *              oneOf:
//  *                - $ref: '#/components/schemas/StackSchema'
//  *                  example: {
//  *                 "_id": "5fad43dd35fd7a038acc1cfc",
//  *                  "name": "stackName",
//  *                 "wikipediaLink": "https://en.wikipedia.com/stack"
//  *                  }
//  */
// router.get('/:id', StackComponent.findOne);
// /**
//  * PATCH method route 
//  * @example http://localhost:PORT/v1/stacks/:id
//  * 
//  * @swagger
//  * /v1/stacks/{id}:
//  *  patch:
//  *    description: Update stack by stackId
//  *    tags: ["stack"]
//  *    security:
//  *      - ApiKeyAuth: []
//  *    parameters:
//  *      - in: path
//  *        name: id
//  *        description: the unique stackId
//  *        required: true
//  *        schema:
//  *          type: 
//  *              example:                     
// *                  {
// *                       "_id": "5fad88480ed2840b17a3c94d",
// *                       "name": "stackName",
// *                       "wikipediaLink": "https://en.wikipedia.com/stack"
// *                   }
//  *     requestBody:
//  *        description: stack update request body
//  *        required: true
//  *        content:
//  *          application/json:
//  *            schema:
//  *              $ref: '#/components/schemas/StackSchema'
//  *            example:    
//  * responses:
//  *      200:
//  *        description: return updated stack
//  *        content:
//  *          application/json:
//  *            schema:
//  *              oneOf:
//  *                - $ref: '#/components/schemas/StackSchema',
//  *                 example:     
//  *                      {
//  *                          "n": 1,
//  *                          "nModified": 0,
//  *                          "ok": 1
//  *                      }
//  *                  
//  */
// router.patch('/:id', StackComponent.update);
// /**
//  * DELETE method route
//  * @example  http://localhost:PORT/v1/stacks/:id
// *
//  * @swagger
//  * /v1/stacks/{id}:
//  *  delete:
//  *    description: Delete stack by stackId
//  *    tags: ["stack"]
//  *    security:
//  *      - ApiKeyAuth: []
//  *    parameters:
//  *      - in: path
//  *        name: id
//  *        description: the unique stackId
//  *        required: true
//  *        schema:
//  *          type: string
//  *    requestBody:
//  *        description: stack update request body
//  *        required: true
//  *        content:
//  *          application/json:
//  *            schema:
//  *              $ref: '#/components/schemas/StackSchema'
//  *            example: 
//  *              id: '5fac7592e79044cc3545e778c8'
//  *              name: stackName
//  *              wikipediaLink: https://en.wikipedia.com/stack
//  *    responses:
//  *      200:
//  *        description: return deleted stack
//  *        content:
//  *          application/json:
//  *            schema:
//  *              oneOf:
//  *                - $ref: '#/components/schemas/StackSchema'
//  */
// router.delete('/:id', StackComponent.remove);
// /**
//  * @export {express.Router}
//  */
// export default router;
// {
//   "openapi": "3.0.0",
//   "info": {
//     "title": "Node-Typescript API",
//     "version": "1.0.0",
//     "description": "A sample API"
//   },
//   "servers": [
//     {
//       "url": "http://localhost:3000"
//     }
//   ],
//   "paths": {
//     "/auth/signup/": {
//       "post": {
//         "description": "sign up user to application",
//         "tags": [
//           "auth"
//         ],
//         "requestBody": {
//           "description": "sign up body",
//           "required": true,
//           "content": {
//             "application/json": {
//               "schema": {
//                 "$ref": "#/components/schemas/UserSchema"
//               },
//               "example": {
//                 "email": "test.user@mail.com",
//                 "password": "test_test"
//               }
//             }
//           }
//         },
//         "responses": {
//           "200": {
//             "description": "user successfuly signed in",
//             "content": {
//               "appication/json": {
//                 "example": {
//                   "status": 200,
//                   "logged": true,
//                   "message": "Sign in successfull!!"
//                 }
//               }
//             }
//           },
//           "400": {
//             "description": "sign in failed",
//             "content": {
//               "application/json": {
//                 "example": {
//                   "status": 400,
//                   "logged": false,
//                   "message": "Email already exists"
//                 }
//               }
//             }
//           }
//         }
//       }
//     },
//     "/auth/login/": {
//       "post": {
//         "description": "Login user to application",
//         "tags": [
//           "auth"
//         ],
//         "requestBody": {
//           "description": "login body",
//           "required": true,
//           "content": {
//             "application/json": {
//               "schema": {
//                 "$ref": "#/components/schemas/UserSchema"
//               },
//               "example": {
//                 "email": "test.user@mail.com",
//                 "password": "test_test"
//               }
//             }
//           }
//         },
//         "responses": {
//           "200": {
//             "description": "user successfuly logged",
//             "content": {
//               "appication/json": {
//                 "example": {
//                   "status": 200,
//                   "logged": true,
//                   "message": "Successfully logged!"
//                 }
//               }
//             }
//           },
//           "401": {
//             "description": "Not logged, invalid credentials",
//             "content": {
//               "application/json": {
//                 "example": {
//                   "status": 401,
//                   "logged": false,
//                   "message": "Invalid credentials"
//                 }
//               }
//             }
//           }
//         }
//       }
//     },
//     "/v1/stacks": {
//       "post": {
//         "description": "Create new Stack",
//         "tags": [
//           "stacks"
//         ],
//         "security": [
//           {
//             "ApiKeyAuth": []
//           }
//         ],
//         "requestBody": {
//           "description": "stack creation request body",
//           "required": true,
//           "content": {
//             "application/json": {
//               "schema": {
//                 "$ref": "#/components/schemas/StackSchema"
//               },
//               "example": {
//                 "name": "stackName",
//                 "wikipediaLink": "https://en.wikipedia.com/stack"
//               }
//             }
//           }
//         },
//         "responses": {
//           "201": {
//             "description": "return created stack",
//             "content": {
//               "application/json": {
//                 "schema": {
//                   "oneOf": [
//                     {
//                       "$ref": "#/components/schemas/StackSchema"
//                     }
//                   ]
//                 }
//               }
//             }
//           },
//           "default": {
//             "description": "unexpected error",
//             "content": {
//               "application/json": {
//                 "schema": {
//                   "$ref": "#/components/schemas/Error"
//                 }
//               }
//             }
//           }
//         }
//       },
//       "get": {
//         "description": "Get all stored stacks in Database",
//         "tags": [
//           "stacks"
//         ],
//         "security": [
//           {
//             "ApiKeyAuth": []
//           }
//         ],
//         "responses": {
//           "200": {
//             "description": "An array of stacks",
//             "content": {
//               "application/json": {
//                 "schema": {
//                   "oneOf": [
//                     {
//                       "$ref": "#/components/schemas/Stacks"
//                     }
//                   ]
//                 }
//               }
//             }
//           },
//           "default": {
//             "description": "unexpected error",
//             "content": {
//               "application/json": {
//                 "schema": {
//                   "$ref": "#/components/schemas/Error"
//                 }
//               }
//             }
//           }
//         }
//       }
//     },
//     "/v1/stacks/{id}": {
//       "get": {
//         "description": "Get stack by stackId",
//         "tags": [
//           "stacks"
//         ],
//         "security": [
//           {
//             "ApiKeyAuth": []
//           }
//         ],
//         "parameters": [
//           {
//             "in": "path",
//             "name": "id",
//             "description": "the unique stackId",
//             "required": true,
//             "schema": {
//               "type": "string"
//             }
//           }
//         ],
//         "responses": {
//           "200": {
//             "description": "return stack by id",
//             "content": {
//               "application/json": {
//                 "schema": {
//                   "oneOf": [
//                     {
//                       "$ref": "#/components/schemas/StackSchema"
//                     }
//                   ]
//                 }
//               }
//             }
//           }
//         }
//       }, 
//       "patch": {
//         "description": "Update stack by stackId",
//         "tags": [
//           "stacks"
//         ],
//         "security": [
//           {
//             "ApiKeyAuth": []
//           }
//         ],
//         "parameters": [
//           {
//             "in": "path",
//             "name": "id",
//             "description": "the unique stackId",
//             "required": true,
//             "schema": {
//               "type": "string"
//             }
//           }
//         ],
//         "responses": {
//           "200": {
//             "description": "return updated stack",
//             "content": {
//               "application/json": {
//                 "schema": {
//                   "oneOf": [
//                     {
//                       "$ref": "#/components/schemas/StackSchema"
//                     }
//                   ]
//                 }
//               }
//             }
//           }
//         }
//       },
//       "delete": {
//         "description": "Delete stack by stackId",
//         "tags": [
//           "stacks"
//         ],
//         "security": [
//           {
//             "ApiKeyAuth": []
//           }
//         ],
//         "parameters": [
//           {
//             "in": "path",
//             "name": "id",
//             "description": "the unique stackId",
//             "required": true,
//             "schema": {
//               "type": "string"
//             }
//           }
//         ],
//         "requestBody": {
//           "description": "stack update request body",
//           "required": true,
//           "content": {
//             "application/json": {
//               "schema": {
//                 "$ref": "#/components/schemas/StackSchema"
//               },
//               "example": {
//                 "id": "5fac7592e79044cc3545e778c8",
//                 "name": "stackName",
//                 "wikipediaLink": "https://en.wikipedia.com/stack"
//               }
//             }
//           }
//         },
//         "responses": {
//           "200": {
//             "description": "return deleted stack",
//             "content": {
//               "application/json": {
//                 "schema": {
//                   "oneOf": [
//                     {
//                       "$ref": "#/components/schemas/StackSchema"
//                     }
//                   ]
//                 }
//               }
//             }
//           }
//         }
//       }
//     },
//     "/v1/users": {
//       "get": {
//         "description": "Get all stored users in Database",
//         "tags": [
//           "users"
//         ],
//         "security": [
//           {
//             "ApiKeyAuth": []
//           }
//         ],
//         "responses": {
//           "200": {
//             "description": "An array of users",
//             "content": {
//               "application/json": {
//                 "schema": {
//                   "oneOf": [
//                     {
//                       "$ref": "#/components/schemas/Users"
//                     }
//                   ]
//                 }
//               }
//             }
//           },
//           "default": {
//             "description": "unexpected error",
//             "content": {
//               "application/json": {
//                 "schema": {
//                   "$ref": "#/components/schemas/Error"
//                 }
//               }
//             }
//           }
//         }
//       },
//       "post": {
//         "description": "Create new User",
//         "tags": [
//           "users"
//         ],
//         "security": [
//           {
//             "ApiKeyAuth": []
//           }
//         ],
//         "requestBody": {
//           "description": "user creation request body",
//           "required": true,
//           "content": {
//             "application/json": {
//               "schema": {
//                 "$ref": "#/components/schemas/UserSchema"
//               },
//               "example": {
//                 "name": "userName",
//                 "email": "test.user@mail.com"
//               }
//             }
//           }
//         },
//         "responses": {
//           "201": {
//             "description": "return created user",
//             "content": {
//               "application/json": {
//                 "schema": {
//                   "oneOf": [
//                     {
//                       "$ref": "#/components/schemas/UserSchema"
//                     }
//                   ]
//                 }
//               }
//             }
//           },
//           "default": {
//             "description": "unexpected error",
//             "content": {
//               "application/json": {
//                 "schema": {
//                   "$ref": "#/components/schemas/Error"
//                 }
//               }
//             }
//           }
//         }
//       }
//     },
//     "/v1/users/{id}": {
//       "get": {
//         "description": "Get user by userId",
//         "tags": [
//           "users"
//         ],
//         "security": [
//           {
//             "ApiKeyAuth": []
//           }
//         ],
//         "parameters": [
//           {
//             "in": "path",
//             "name": "id",
//             "description": "the unique userId",
//             "required": true,
//             "schema": {
//               "type": "string"
//             }
//           }
//         ],
//         "responses": {
//           "200": {
//             "description": "return user by id",
//             "content": {
//               "application/json": {
//                 "schema": {
//                   "oneOf": [
//                     {
//                       "$ref": "#/components/schemas/UserSchema"
//                     }
//                   ]
//                 }
//               }
//             }
//           }
//         }
//       },
//       "delete": {
//         "description": "Delete user by userId",
//         "tags": [
//           "users"
//         ],
//         "security": [
//           {
//             "ApiKeyAuth": []
//           }
//         ],
//         "parameters": [
//           {
//             "in": "path",
//             "name": "id",
//             "description": "the unique userId",
//             "required": true,
//             "schema": {
//               "type": "string"
//             }
//           }
//         ],
//         "responses": {
//           "200": {
//             "description": "return deleted user",
//             "content": {
//               "application/json": {
//                 "schema": {
//                   "oneOf": [
//                     {
//                       "$ref": "#/components/schemas/UserSchema"
//                     }
//                   ]
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   },
//   "components": {
//     "schemas": {
//       "UserSchema": {
//         "required": [
//           "email",
//           "name"
//         ],
//         "properties": {
//           "id": {
//             "type": "string"
//           },
//           "name": {
//             "type": "string"
//           },
//           "email": {
//             "type": "string"
//           },
//           "password": {
//             "type": "string"
//           },
//           "passwordResetToken": {
//             "type": "string"
//           },
//           "passwordResetExpires": {
//             "type": "string",
//             "format": "date"
//           },
//           "tokens": {
//             "type": "array"
//           }
//         }
//       },
//       "Users": {
//         "type": "array",
//         "items": {
//           "$ref": "#/components/schemas/UserSchema"
//         }
//       },
//       "Error": {
//         "type": "object",
//         "required": [
//           "status",
//           "message"
//         ],
//         "properties": {
//           "status": {
//             "type": "integer",
//             "description": "HTTP status code",
//             "example": 200
//           },
//           "message": {
//             "type": "string",
//             "description": "Error description",
//             "example": "User created"
//           }
//         }
//       }
//     },
//     "securitySchemes": {
//       "ApiKeyAuth": {
//         "type": "apiKey",
//         "in": "header",
//         "name": "x-access-token"
//       }
//     }
//   },
//   "tags": []
// }
//# sourceMappingURL=ts.js.map