import React from "react";
import { motion } from "framer-motion";
import { TeacherProfile } from "./TeacherProfile";

export default function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <TeacherProfile />
    </motion.div>
  );
}
