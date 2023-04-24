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
 *      tags: [Login&SignUp]
 *      responses:
 *           200:
 *              description: success
 */

/**
 * @swagger
 * /api/user/signup:
 *  post:
 *      description: Đăng ký User
 *      tags: [Login&SignUp]
 *      parameters:
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
 *              description: success
 */

/**
 * @swagger
 * /api/img/get-img:
 *  get:
 *      description: List ảnh trang chủ
 *      tags: [TrangChu]
 *      responses:
 *           200:
 *              description: success
 */

/**
 * @swagger
 * /api/img/search/{keyword}:
 *  get:
 *      description: Tìm kiếm danh sách ảnh theo tên
 *      tags: [TrangChu]
 *      parameters:
 *      - in: path
 *        name: keyword
 *      responses:
 *           200:
 *              description: success
 */

/**
 * @swagger
 * /api/img/detail/{hinh_id}:
 *  get:
 *      description: Thông tin ảnh & người tạo ảnh bằng id ảnh
 *      tags: [TrangChiTiet]
 *      parameters:
 *      - in: path
 *        name: hinh_id
 *      responses:
 *           200:
 *              description: success
 */

/**
 * @swagger
 * /api/img/comment/{hinh_id}:
 *  get:
 *      description: Thông tin bình luận bằng id ảnh
 *      tags: [TrangChiTiet]
 *      parameters:
 *      - in: path
 *        name: hinh_id
 *      responses:
 *           200:
 *              description: success
 */

/**
 * @swagger
 * /api/img/save-img:
 *  post:
 *      description: Thông tin lưu ảnh
 *      tags: [TrangChiTiet]
 *      parameters:
 *      - in: query
 *        name: nguoi_dung_id
 *        type: integer
 *      - in: query
 *        name: hinh_id
 *        type: integer
 *      - in: header
 *        name: token
 *        type: string
 *        required: true
 *      responses:
 *           200:
 *              description: success
 */

/**
 * @swagger
 * /api/img/comment-img:
 *  post:
 *      description: Bình luận ảnh
 *      tags: [TrangChiTiet]
 *      parameters:
 *      - in: header
 *        name: token
 *        type: string
 *        required: true
 *      - in: body
 *        name: binh_luan
 *        schema:
 *           type: object
 *           properties:
 *             nguoi_dung_id:
 *               type: integer
 *             hinh_id:
 *               type: integer
 *             noi_dung:
 *               type: string
 *      responses:
 *           200:
 *              description: success
 */

/**
 * @swagger
 * /api/user/get-user:
 *  get:
 *      description: Lấy danh sách User
 *      tags: [TrangQuanLyAnh]
 *      parameters:
 *      - in: header
 *        name: token
 *        type: string
 *        required: true
 *      responses:
 *           200:
 *              description: success
 */

/**
 * @swagger
 * /api/user/saved/{id}:
 *  get:
 *      description: Lấy danh sách ảnh đã lưu
 *      tags: [TrangQuanLyAnh]
 *      parameters:
 *      - in: path
 *        name: id
 *      responses:
 *           200:
 *              description: success
 */

/**
 * @swagger
 * /api/user/created/{id}:
 *  get:
 *      description: Lấy danh sách ảnh đã tạo
 *      tags: [TrangQuanLyAnh]
 *      parameters:
 *      - in: path
 *        name: id
 *      responses:
 *           200:
 *              description: success
 */

/**
 * @swagger
 * /api/user/removed/{hinh_id}:
 *  delete:
 *      description: Xóa ảnh
 *      tags: [TrangQuanLyAnh]
 *      parameters:
 *      - in: path
 *        name: hinh_id
 *      - in: query
 *        name: nguoi_dung_id
 *        type: integer
 *      responses:
 *           200:
 *              description: success
 */

/**
 * @swagger
 * /api/img/create-img:
 *  post:
 *      description: Thêm Ảnh
 *      tags: [TrangThemAnh]
 *      parameters:
 *      - in: formData
 *        name: duong_dan
 *        type: file
 *      - in: body
 *        name: hinh_anh
 *        schema:
 *           type: object
 *           properties:
 *             ten_hinh:
 *               type: string
 *             mo_ta:
 *               type: string
 *             nguoi_dung_id:
 *               type: integer
 *      responses:
 *           200:
 *              description: success
 */

/**
 * @swagger
 * /api/user/update-user/{id}:
 *  put:
 *      description: Cập nhật thông tin user
 *      tags: [ChinhSuaThongTin]
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