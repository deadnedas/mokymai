exports.checkAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    console.log("Admin middleware fired");
    next();
  } else {
    res.status(403).json({
      status: "fail",
      message: "Forbidden: Admins only",
    });
  }
};
