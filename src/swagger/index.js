
/**
 * @swagger
 * /api/food/get-food:
 *  get:
 *      description: ghi chú 
 *      tags: [Food]
 *      responses:
 *           200:
 *              description: success
 */

/**
 * @swagger
 * /api/user/get-user:
 *  get:
 *      description: Lấy danh sách User
 *      tags: [User]
 *      responses:
 *           200:
 *              description: success
 */

/**
 * @swagger
 * /api/user/login:
 *  post:
 *      description: Đăng nhập
 *      parameters:
 *      - in: body
 *        name: login
 *        schema:
 *          type: object
 *          properties:
 *             mat_khau:
 *               type: string
 *             email:
 *               type: string
 *      tags: [User]
 *      responses:
 *           200:
 *              description: success
 */

/**
 * @swagger
 * /api/user/update-user/{id}:
 *  put:
 *      description: Cập nhật user
 *      tags: [User]
 *      parameters:
 *      - in: path
 *        name: id
 *      - in: body
 *        name: nguoi_dung
 *        schema:
 *           type: object
 *           properties:
 *             ho_ten:
 *               type: string
 *             email:
 *               type: string
 *             mat_khau:
 *               type: string
 *             tuoi:
 *               type: integer
 *      responses:
 *          200:
 *              description: res
 */