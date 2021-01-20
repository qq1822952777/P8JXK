// 引入axios请求的封装
// 通过 async 异步操作 await 等待这个请求
// 请求收到后 就返回出数据 data.data 大部分数据结构皆是如此 可自定义 视情况而定
// 相应的请求在相应的页面 导入这个模块 解构赋值 拿取要用到的请求 使用 name_zdy().then(res=>{ },err=>{})使用它
import server from "../server";

// 密码登录  携带端口要求的验证参数
const isLogin = async function({ mobile, password, type }) {
  var { data } = await server.post("/api/app/login", {
    mobile,
    password,
    type,
  });
  return Promise.resolve(data);
};
// 验证码登录  携带端口要求的验证参数
const verificationLogin = async function({ mobile, sms_type }) {
  var { data } = await server.post("/api/app/smsCode", { mobile, sms_type });
  return Promise.resolve(data);
};
// 首页轮播图请求
const homeswipereq = async function() {
  var { data } = await server.get("/api/app/banner");
  return Promise.resolve(data.data);
};
// 首页数据请求
const homereq = async function() {
  var { data } = await server.get("/api/app/recommend/appIndex");
  return Promise.resolve(data.data);
};
// 老师详情页数据
const teacherDetile = async function(id) {
  var { data } = await server.get("/api/app/teacher/" + id);
  return Promise.resolve(data.data);
};
// 老师详情页的评论信息  #### 数据为空
const teacherDiscussDetile = async function({ limit, page, teacher_id }) {
  var { data } = await server.post("/api/app/teacher/comment", {
    limit,
    page,
    teacher_id,
  });
  return Promise.resolve(data.data);
};
// 老师的关注与取消
const isTeacherAttention = async function({ id }) {
  var { data } = await server.get("/api/app/teacher/collect/" + id);
  return Promise.resolve(data.data);
};
// 个人信息
const userInof = async function() {
  var { data } = await server.get("/api/app/userInfo");
  return Promise.resolve(data);
};
// 修改个人信息
const user = async function(i) {
  var { data } = await server.put("/api/app/user?", i);
  return Promise.resolve(data);
};
// 关注的老师
const collect = async function(id) {
  console.log(id);
  var { data } = await server.get("/api/app/collect?type=1", {
    course_basis_id: id,
  });
  return Promise.resolve(data);
};

// *****重启后的新增请求 自行寻找需求的请求********
// 修改密码接口
const upPassword = async function({ mobile, password, sms_code }) {
  var { data } = await server.post("/api/app/password", {
    mobile,
    password,
    sms_code,
  });
  return Promise.resolve(data.data);
};
// 首页列表点击进入详情老师详情信息接口
const TeacherDetile = async function({ id }) {
  var { data } = await server.get("/api/app/teacher/info/" + id);
  return Promise.resolve(data.data);
};
// 主讲课程
const MainCourse = async function({ limit, page, teacher_id }) {
  var { data } = await server.post("/api/app/teacher/mainCourse", {
    limit,
    page,
    teacher_id,
  });
  return Promise.resolve(data.data);
};
// 课程详情数据获取
const GetCourseDetile = async function(id) {
  //   console.log(id);
  var { data } = await server.get(`/api/app/courseInfo/basis_id=${id}`);
  return Promise.resolve(data.data);
};
//
// 课程评价数据获取
const Getevaluation = async function({ id, limit, page }) {
  console.log(id, limit, page);
  var { data } = await server.post("/api/app/courseComment", {
    id,
    limit,
    page,
  });
  return Promise.resolve(data.data);
};
// 课程收藏
const CourseCollection = async function({ course_basis_id, type = 1 }) {
  var { data } = await server.post("/api/app/collect", {
    course_basis_id,
    type,
  });
  return Promise.resolve(data.data);
};
// 课程取消收藏
const onCourseCollection = async function({ id, type }) {
  console.log(id, type);
  var { data } = await server.post(`/api/app/collect/cancel/${id}/${type}`);
  return Promise.resolve(data);
};
// 课堂报名
const ClassRegistration = async function(obj) {
  console.log(obj);
  var { data } = await server.post("/api/app/order/downOrder", {
    shop_id: obj.id,
    type: 5,
  });
  return Promise.resolve(data);
};
// 立即学习页面数据
const LearningImmediately = async function({ id }) {
  var { data } = await server.get("/api/app/myStudy/course/" + id);
  return Promise.resolve(data.data);
};
// video视频获取接口
const GetVideo = async function({ video_id, course_id }) {
  var { data } = await server.get(
    "/api/app/getPlayToken/video_id=" + video_id + "/course_id=" + course_id
  );
  return Promise.resolve(data.data);
};
// 获取我关注的老师接口
const GetInterestTeacher = async function({ page, limit, type = 2 }) {
  var { data } = await server.get("/api/app/collect", { page, limit, type });
  return Promise.resolve(data.data);
};
// 取消我关注的老师接口
const onGetInterestTeacher = async function({ collect_id, id }) {
  var { data } = await server.put(
    "/api/app/collect/cancel/" + collect_id + "/" + id
  );
  return Promise.resolve(data.data);
};
// 获取我的特色课内容
const Getcharacteristic = async function() {
  var { data } = await server.get("/api/app/myStudy/2");
  return Promise.resolve(data);
};
// 特色课分类下拉接口
const GetcharacteristicPulldown = async function() {
  var { data } = await server.get("/api/app/courseClassify");
  return Promise.resolve(data.data);
};
// 特色课列表数据获取
const FeatureClassListData = async function({ page }) {
  //   console.log(page);
  var { data } = await server.get(
    "/api/app/courseBasis?page=1&limit=" + page + "&"
  );
  return Promise.resolve(data.data);
};
// 课程搜索接口
const CourseSearch = async function({ limit, page, course_type, keywords }) {
  var { data } = await server.get(
    "/api/app/courseBasis?limit=" +
      limit +
      "&page=" +
      page +
      "&course_type=" +
      course_type +
      "&keywords=" +
      keywords
  );
  return Promise.resolve(data.data);
};
// 我的学习
const myStudy = async function({ type }) {
  var { data } = await server.get("/api/app/myStudy/" + type);
  return Promise.resolve(data.data);
};
// 选择年纪和学科得数据
const ageDiscipline = async function() {
  var { data } = await server.get("/app/module/attribute/1");
  return Promise.resolve(data.data);
};
// 获取城市列表数据
const GetCity = async function() {
  var { data } = await server.get("/api/app/sonArea/0");
  return Promise.resolve(data.data);
};
// 首页点击的更多老师阵容
// /api/app/teacher/search/attrs?page=1&limit=10&
const GetMoreTeacher = async function({ page, limit }) {
  var { data } = await server.get(
    "/api/app/teacher/search/attrs?page=" + page + "&limit=" + limit + "&"
  );
  return Promise.resolve(data.data);
};
//课程大纲
const Chapter = async function(params) {
  console.log(params);
  var { data } = await server.post("/api/app/courseChapter", {
    id: params,
  });
  return Promise.resolve(data);
};

// 导出请求
export {
  isLogin,
  homeswipereq,
  homereq,
  teacherDetile,
  teacherDiscussDetile,
  isTeacherAttention,
  verificationLogin,
  userInof,
  user,
  collect,
  upPassword,
  TeacherDetile,
  MainCourse,
  GetCourseDetile,
  Getevaluation,
  CourseCollection,
  onCourseCollection,
  ClassRegistration,
  LearningImmediately,
  GetVideo,
  GetInterestTeacher,
  onGetInterestTeacher,
  Getcharacteristic,
  GetcharacteristicPulldown,
  FeatureClassListData,
  CourseSearch,
  myStudy,
  ageDiscipline,
  GetCity,
  Chapter,
  GetMoreTeacher,
};
