CREATE TABLE school_periods (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    code VARCHAR(50) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

CREATE TABLE campus (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL
);

CREATE TABLE academic_classes (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    school_period_id BIGINT UNSIGNED NOT NULL,
    name TEXT NOT NULL,
    code VARCHAR(50) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    category VARCHAR(100),
    course VARCHAR(100),
    active BOOLEAN DEFAULT TRUE,
    is_exceptional BOOLEAN DEFAULT FALSE,
    period VARCHAR(50),
    campus_id BIGINT UNSIGNED,
    integration VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,

    FOREIGN KEY (school_period_id) REFERENCES school_periods(id),
    FOREIGN KEY (campus_id) REFERENCES campus(id)
);

CREATE TABLE disciplines (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    school_period_id BIGINT UNSIGNED NOT NULL,
    academic_class_id BIGINT UNSIGNED NOT NULL,
    name TEXT NOT NULL,
    code VARCHAR(50) NOT NULL,
    shift VARCHAR(12) NOT NULL,
    active BOOLEAN NOT NULL DEFAULT TRUE,
    is_exceptional BOOLEAN DEFAULT FALSE,
    integration VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,

    FOREIGN KEY (academic_class_id) REFERENCES academic_classes(id),
    FOREIGN KEY (school_period_id) REFERENCES school_periods(id)
);

CREATE TABLE users (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    id_old_bonsae INT,
    id_audora INT,
    profile_id BIGINT UNSIGNED NOT NULL,
    active BOOLEAN DEFAULT TRUE,
    name VARCHAR(100) NOT NULL,
    registration_number VARCHAR(50),
    email VARCHAR(100) NOT NULL,
    receive_emails BOOLEAN DEFAULT FALSE,
    gmail VARCHAR(100),
    gcalendar_credentials TEXT,
    approve_api BOOLEAN DEFAULT FALSE,
    approve_msg VARCHAR(255),
    telephone VARCHAR(20),
    password VARCHAR(255),
    cpf VARCHAR(14),
    period_id INT, -- se refere ao período curricular?
    oab VARCHAR(20),
    oab_uf CHAR(2),
    workload_real TIME,
    workload_simulated TIME,
    observations TEXT,
    profile_pic VARCHAR(255),
    course VARCHAR(100),
    course_id INT, -- essa informação está em alguma planilha?
    is_admin BOOLEAN DEFAULT FALSE,
    remember_token VARCHAR(100),
    access_token VARCHAR(255),
    browser_agent VARCHAR(255),
    date_accept DATE,
    last_login DATETIME,
    last_logout DATETIME,
    logged_time TIME,
    all_time_logged TIME,
    average_logged_time TIME,
    times_active INT DEFAULT 0,
    ip VARCHAR(45),
    permission TINYINT DEFAULT 0,
    integration VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

-- constraint para tentar impedir repetição de usuário usando como base, email, nome, profile e matricula
ALTER TABLE users
ADD CONSTRAINT unique_user_profile_registration
UNIQUE (profile_id, name, registration_number, email);

CREATE TABLE discipline_users (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    discipline_id BIGINT UNSIGNED NOT NULL,
    user_id BIGINT UNSIGNED NOT NULL,
    team_id INT,
    temporary BOOLEAN DEFAULT FALSE,
    professor BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,

    FOREIGN KEY (discipline_id) REFERENCES disciplines(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);