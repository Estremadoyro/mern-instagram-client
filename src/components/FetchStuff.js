import React, { useState, useEffect } from "react";

const FetchStuff = () => {
  const [loading, setLoading] = useState(false);
  const [teachers, setTeachers] = useState([]);

  const getTeachersImages = async () => {
    setLoading(true);
    const fetchImages = await fetch("https://ulima-api-jfioywd3ja-uc.a.run.app/api/v1/teachers/");
    const response = await fetchImages.json();
    setLoading(false);
    console.log(response[1]);
    setTeachers(response);
  };

  useEffect(() => {
    getTeachersImages();
  }, []);

  return (
    <div>
      <h5>Teachers</h5>
      {teachers.length}
      {!loading ? (
        teachers.map((teacher) => {
          return (
            <div>
              <div key={teacher.id}>{teacher.photo}</div>
            </div>
          );
        })
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default FetchStuff;
