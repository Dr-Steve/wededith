
CREATE DATABASE wedding_rsvp;

CREATE USER 'app'@'localhost' IDENTIFIED BY 'b4RV;JpLqs7DSt(m';

GRANT INSERT ON wedding_rsvp.* TO 'app'@'localhost';
GRANT SELECT ON wedding_rsvp.* TO 'app'@'localhost';

FLUSH PRIVILEGES;

CREATE TABLE wedding_rsvp.guest (
  id INT() UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  guestName VARCHAR(255),
  coming TINYINT(1),
  overnight TINYINT(1),
  comments VARCHAR(255),
  regDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
)