export declare const swaggerPaths: {
    /**
     * Import
     */
    '/import/csv': {
        post: {
            summary: string;
            tags: string[];
            requestBody: {
                required: boolean;
                content: {
                    'application/json': {
                        schema: {
                            type: string;
                            properties: {
                                processId: {
                                    type: string;
                                    example: string;
                                };
                                schoolPeriod: {
                                    type: string;
                                    properties: {
                                        code: {
                                            type: string;
                                            example: string;
                                        };
                                        name: {
                                            type: string;
                                            example: string;
                                        };
                                        startDate: {
                                            type: string;
                                            format: string;
                                            example: string;
                                        };
                                        endDate: {
                                            type: string;
                                            format: string;
                                            example: string;
                                        };
                                    };
                                    required: string[];
                                };
                                subjects: {
                                    type: string;
                                    items: {
                                        type: string;
                                        properties: {
                                            periodId: {
                                                type: string;
                                                example: string;
                                            };
                                            name: {
                                                type: string;
                                                example: string;
                                            };
                                            code: {
                                                type: string;
                                                example: string;
                                            };
                                            startDate: {
                                                type: string;
                                                format: string;
                                                example: string;
                                            };
                                            endDate: {
                                                type: string;
                                                format: string;
                                                example: string;
                                            };
                                            category: {
                                                type: string;
                                                example: string;
                                            };
                                            period: {
                                                type: string;
                                                example: string;
                                            };
                                            state: {
                                                type: string;
                                                example: number;
                                            };
                                            campus: {
                                                type: string;
                                                example: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                                classes: {
                                    type: string;
                                    items: {
                                        type: string;
                                        properties: {
                                            subjectCode: {
                                                type: string;
                                                example: string;
                                            };
                                            shift: {
                                                type: string;
                                                example: string;
                                            };
                                            name: {
                                                type: string;
                                                example: string;
                                            };
                                            code: {
                                                type: string;
                                                example: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                                users: {
                                    type: string;
                                    items: {
                                        type: string;
                                        properties: {
                                            profileId: {
                                                type: string;
                                                example: string;
                                            };
                                            name: {
                                                type: string;
                                                example: string;
                                            };
                                            email: {
                                                type: string;
                                                format: string;
                                                example: string;
                                            };
                                            cpf: {
                                                type: string;
                                                example: string;
                                            };
                                            password: {
                                                type: string;
                                                example: string;
                                            };
                                            registrationNumber: {
                                                type: string;
                                                example: string;
                                            };
                                            telephone: {
                                                type: string;
                                                example: string;
                                            };
                                            periodId: {
                                                type: string;
                                                example: number;
                                            };
                                            observations: {
                                                type: string;
                                                example: string;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                                enrollments: {
                                    type: string;
                                    items: {
                                        type: string;
                                        properties: {
                                            subjectCode: {
                                                type: string;
                                                example: string;
                                            };
                                            classCode: {
                                                type: string;
                                                example: string;
                                            };
                                            registrationNumber: {
                                                type: string;
                                                example: string;
                                            };
                                            email: {
                                                type: string;
                                                format: string;
                                                example: string;
                                            };
                                            professor: {
                                                type: string;
                                                example: boolean;
                                            };
                                        };
                                        required: string[];
                                    };
                                };
                            };
                            required: string[];
                        };
                        example: {
                            processId: string;
                            schoolPeriod: {
                                code: string;
                                name: string;
                                startDate: string;
                                endDate: string;
                            };
                            subjects: {
                                periodId: string;
                                name: string;
                                code: string;
                                startDate: string;
                                endDate: string;
                                category: string;
                                period: string;
                                state: number;
                                campus: string;
                            }[];
                            classes: {
                                subjectCode: string;
                                shift: string;
                                name: string;
                                code: string;
                            }[];
                            users: {
                                profileId: string;
                                name: string;
                                email: string;
                                cpf: string;
                                password: string;
                                registrationNumber: string;
                                telephone: string;
                                periodId: number;
                                observations: string;
                            }[];
                            enrollments: {
                                subjectCode: string;
                                classCode: string;
                                registrationNumber: string;
                                email: string;
                                professor: boolean;
                            }[];
                        };
                    };
                };
            };
            responses: {
                201: {
                    description: string;
                };
                500: {
                    description: string;
                };
            };
        };
    };
    '/import/save': {
        post: {
            summary: string;
            tags: string[];
            requestBody: {
                required: boolean;
                content: {
                    'application/json': {
                        schema: {
                            type: string;
                            properties: {
                                data: {
                                    type: string;
                                    properties: {
                                        studentsEnrollments: {
                                            type: string;
                                            items: {
                                                type: string;
                                            };
                                        };
                                        professorEnrollments: {
                                            type: string;
                                            items: {
                                                type: string;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                201: {
                    description: string;
                };
                500: {
                    description: string;
                };
            };
        };
    };
    '/import/save-documents/:id': {
        post: {
            summary: string;
            tags: string[];
            parameters: {
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                };
                description: string;
            }[];
            responses: {
                200: {
                    description: string;
                };
                404: {
                    description: string;
                };
                500: {
                    description: string;
                };
            };
        };
    };
    /**
     * Process
     */
    '/process': {
        post: {
            summary: string;
            tags: string[];
            requestBody: {
                required: boolean;
                content: {
                    'application/json': {
                        schema: {
                            type: string;
                            properties: {
                                processId: {
                                    type: string;
                                    example: string;
                                };
                            };
                            required: string[];
                        };
                    };
                };
            };
            responses: {
                201: {
                    description: string;
                };
                400: {
                    description: string;
                };
                409: {
                    description: string;
                };
                500: {
                    description: string;
                };
            };
        };
        get: {
            summary: string;
            tags: string[];
            responses: {
                200: {
                    description: string;
                };
                404: {
                    description: string;
                };
                500: {
                    description: string;
                };
            };
        };
    };
    '/process/{processId}': {
        get: {
            summary: string;
            tags: string[];
            parameters: {
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                };
            }[];
            responses: {
                200: {
                    description: string;
                };
                400: {
                    description: string;
                };
                404: {
                    description: string;
                };
                500: {
                    description: string;
                };
            };
        };
        delete: {
            summary: string;
            tags: string[];
            parameters: {
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                };
            }[];
            responses: {
                200: {
                    description: string;
                };
                404: {
                    description: string;
                };
                500: {
                    description: string;
                };
            };
        };
    };
    '/process/full/{processId}': {
        get: {
            summary: string;
            tags: string[];
            parameters: {
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                };
            }[];
            responses: {
                200: {
                    description: string;
                };
                400: {
                    description: string;
                };
                404: {
                    description: string;
                };
                500: {
                    description: string;
                };
            };
        };
    };
    '/process/partial/{processId}/{model}': {
        get: {
            summary: string;
            tags: string[];
            parameters: ({
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                    enum?: undefined;
                };
            } | {
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                    enum: string[];
                };
            })[];
            responses: {
                200: {
                    description: string;
                };
                400: {
                    description: string;
                };
                404: {
                    description: string;
                };
                500: {
                    description: string;
                };
            };
        };
        delete: {
            summary: string;
            tags: string[];
            parameters: ({
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                    enum?: undefined;
                };
            } | {
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                    enum: string[];
                };
            })[];
            responses: {
                200: {
                    description: string;
                };
                400: {
                    description: string;
                };
                500: {
                    description: string;
                };
            };
        };
    };
    /**
     * ProfessorEnrollment
     */
    "/professor-enrollment/batch": {
        post: {
            summary: string;
            tags: string[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                processId: {
                                    type: string;
                                };
                                data: {
                                    type: string;
                                    items: {
                                        $ref: string;
                                    };
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                "201": {
                    description: string;
                };
                "400": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
    };
    "/professor-enrollment": {
        post: {
            summary: string;
            tags: string[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                processId: {
                                    type: string;
                                };
                                data: {
                                    $ref: string;
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                "201": {
                    description: string;
                };
                "409": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
        get: {
            summary: string;
            tags: string[];
            responses: {
                "200": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
    };
    "/professor-enrollment/get-one/{id}": {
        get: {
            summary: string;
            tags: string[];
            parameters: {
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                };
            }[];
            responses: {
                "200": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
    };
    "/professor-enrollment/{id}": {
        put: {
            summary: string;
            tags: string[];
            parameters: {
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                };
            }[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                processId: {
                                    type: string;
                                };
                                subjectCode: {
                                    type: string;
                                };
                                classCode: {
                                    type: string;
                                };
                                professorEmail: {
                                    type: string;
                                };
                                registrationNumber: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                "200": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
        delete: {
            summary: string;
            tags: string[];
            parameters: {
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                };
            }[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                processId: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                "200": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
    };
    /**
     * SchoolPeriod
     */
    "/school-period/batch": {
        post: {
            summary: string;
            tags: string[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                processId: {
                                    type: string;
                                };
                                data: {
                                    type: string;
                                    items: {
                                        $ref: string;
                                    };
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                "201": {
                    description: string;
                };
                "400": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
    };
    "/school-period": {
        post: {
            summary: string;
            tags: string[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                processId: {
                                    type: string;
                                };
                                data: {
                                    $ref: string;
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                "201": {
                    description: string;
                };
                "409": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
        get: {
            summary: string;
            tags: string[];
            responses: {
                "200": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
    };
    "/school-period/get-one/{id}": {
        get: {
            summary: string;
            tags: string[];
            parameters: {
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                };
            }[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            properties: {
                                code: {
                                    type: string;
                                };
                                processId: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                "200": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
    };
    "/school-period/{id}": {
        put: {
            summary: string;
            tags: string[];
            parameters: {
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                };
            }[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                processId: {
                                    type: string;
                                };
                                code: {
                                    type: string;
                                };
                                name: {
                                    type: string;
                                };
                                startDate: {
                                    type: string;
                                    format: string;
                                };
                                endDate: {
                                    type: string;
                                    format: string;
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                "200": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
    };
    "/school-period/destroy/{id}": {
        delete: {
            summary: string;
            tags: string[];
            parameters: {
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                };
            }[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            properties: {
                                code: {
                                    type: string;
                                };
                                processId: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                "200": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
    };
    /**
     * StudentEnrollment
     */
    "/student-enrollment/batch": {
        post: {
            summary: string;
            tags: string[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                processId: {
                                    type: string;
                                };
                                data: {
                                    type: string;
                                    items: {
                                        $ref: string;
                                    };
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                "201": {
                    description: string;
                };
                "400": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
    };
    "/student-enrollment": {
        post: {
            summary: string;
            tags: string[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                processId: {
                                    type: string;
                                };
                                data: {
                                    $ref: string;
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                "201": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "409": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
        get: {
            summary: string;
            tags: string[];
            responses: {
                "200": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
    };
    "/student-enrollment/get-one/{id}": {
        get: {
            summary: string;
            tags: string[];
            parameters: {
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                };
            }[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            properties: {
                                processId: {
                                    type: string;
                                };
                                subjectCode: {
                                    type: string;
                                };
                                classCode: {
                                    type: string;
                                };
                                studentEmail: {
                                    type: string;
                                };
                                registrationNumber: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                "200": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
    };
    "/student-enrollment/{id}": {
        put: {
            summary: string;
            tags: string[];
            parameters: {
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                };
            }[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            properties: {
                                processId: {
                                    type: string;
                                };
                                subjectCode: {
                                    type: string;
                                };
                                classCode: {
                                    type: string;
                                };
                                studentEmail: {
                                    type: string;
                                };
                                registrationNumber: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                "200": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
        delete: {
            summary: string;
            tags: string[];
            parameters: {
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                };
            }[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            properties: {
                                processId: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                "200": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
    };
    /**
     * Subject
     */
    "/subject/batch": {
        post: {
            summary: string;
            tags: string[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                processId: {
                                    type: string;
                                };
                                data: {
                                    type: string;
                                    items: {
                                        $ref: string;
                                    };
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                "201": {
                    description: string;
                };
                "400": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
    };
    "/subject": {
        post: {
            summary: string;
            tags: string[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                processId: {
                                    type: string;
                                };
                                data: {
                                    $ref: string;
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                "201": {
                    description: string;
                };
                "409": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
        get: {
            summary: string;
            tags: string[];
            responses: {
                "200": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
    };
    "/subject/get-one/{id}": {
        get: {
            summary: string;
            tags: string[];
            parameters: {
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                };
            }[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            properties: {
                                processId: {
                                    type: string;
                                };
                                code: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                "200": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
    };
    "/subject/{id}": {
        put: {
            summary: string;
            tags: string[];
            parameters: {
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                };
            }[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                processId: {
                                    type: string;
                                };
                                periodId: {
                                    type: string;
                                };
                            };
                            additionalProperties: boolean;
                        };
                    };
                };
            };
            responses: {
                "200": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
    };
    "/subject/destroy/{id}": {
        delete: {
            summary: string;
            tags: string[];
            parameters: {
                name: string;
                in: string;
                required: boolean;
                schema: {
                    type: string;
                };
            }[];
            requestBody: {
                required: boolean;
                content: {
                    "application/json": {
                        schema: {
                            type: string;
                            required: string[];
                            properties: {
                                processId: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
            };
            responses: {
                "200": {
                    description: string;
                };
                "404": {
                    description: string;
                };
                "500": {
                    description: string;
                };
            };
        };
    };
};
