export const swaggerPaths = {
    /**
     * Import
     */
    '/import/csv': {
        post: {
            summary: 'Importa dados de um CSV',
            tags: ['Import'],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                data: {
                                    type: 'object',
                                    description: 'Estrutura contendo arrays de dados por tipo (school_period, subject, class, user, etc.)',
                                },
                            },
                        },
                    },
                },
            },
            responses: {
                201: {
                    description: 'Dados importados com sucesso',
                },
                500: {
                    description: 'Erro ao importar dados',
                },
            },
        },
    },
    // Salva dados processados diretamente no banco transacional
    '/import/save': {
        post: {
            summary: 'Salva os dados já organizados no banco transacional',
            tags: ['Import'],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                data: {
                                    type: 'object',
                                    properties: {
                                        studentsEnrollments: {
                                            type: 'array',
                                            items: { type: 'object' },
                                        },
                                        professorEnrollments: {
                                            type: 'array',
                                            items: { type: 'object' },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            responses: {
                201: {
                    description: 'Dados salvos com sucesso no banco transacional',
                },
                500: {
                    description: 'Erro ao salvar os dados no banco transacional',
                },
            },
        },
    },
    // Salva todos os dados de um processo previamente importado no banco relacional (por ID)
    '/import/save/:id': {
        post: {
            summary: 'Salva no banco transacional os dados associados a um processo',
            tags: ['Import'],
            parameters: [
                {
                    name: 'id',
                    in: 'path',
                    required: true,
                    schema: { type: 'string' },
                    description: 'ID do processo previamente importado',
                },
            ],
            responses: {
                200: {
                    description: 'Dados salvos com sucesso',
                },
                404: {
                    description: 'Processo não encontrado',
                },
                500: {
                    description: 'Erro ao salvar os dados no banco transacional',
                },
            },
        },
    },
    /**
     * Process
     */
    '/process': {
        post: {
            summary: 'Cria um novo processo',
            tags: ['Process'],
            requestBody: {
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'object',
                            properties: {
                                processId: {
                                    type: 'string',
                                    example: '2024-1',
                                },
                            },
                            required: ['processId'],
                        },
                    },
                },
            },
            responses: {
                201: { description: 'Processo criado com sucesso' },
                400: { description: 'processId ausente no corpo da requisição' },
                409: { description: 'Processo já existente' },
                500: { description: 'Erro interno do servidor' },
            },
        },
        get: {
            summary: 'Lista todos os processos existentes',
            tags: ['Process'],
            responses: {
                200: { description: 'Lista de processos retornada com sucesso' },
                404: { description: 'Nenhum processo encontrado' },
                500: { description: 'Erro interno do servidor' },
            },
        },
    },
    '/process/{processId}': {
        get: {
            summary: 'Obtém os dados de um processo específico',
            tags: ['Process'],
            parameters: [
                {
                    name: 'processId',
                    in: 'path',
                    required: true,
                    schema: { type: 'string' },
                },
            ],
            responses: {
                200: { description: 'Dados do processo retornados com sucesso' },
                400: { description: 'processId ausente' },
                404: { description: 'Processo não encontrado' },
                500: { description: 'Erro interno do servidor' },
            },
        },
        delete: {
            summary: 'Deleta um processo completo e seus dados relacionados',
            tags: ['Process'],
            parameters: [
                {
                    name: 'processId',
                    in: 'path',
                    required: true,
                    schema: { type: 'string' },
                },
            ],
            responses: {
                200: { description: 'Processo deletado com sucesso' },
                404: { description: 'Processo não encontrado' },
                500: { description: 'Erro interno do servidor' },
            },
        },
    },
    '/process/full/{processId}': {
        get: {
            summary: 'Obtém todos os dados completos de um processo',
            tags: ['Process'],
            parameters: [
                {
                    name: 'processId',
                    in: 'path',
                    required: true,
                    schema: { type: 'string' },
                },
            ],
            responses: {
                200: { description: 'Dados completos retornados com sucesso' },
                400: { description: 'processId ausente' },
                404: { description: 'Processo não encontrado' },
                500: { description: 'Erro interno do servidor' },
            },
        },
    },
    '/process/partial/{processId}/{model}': {
        get: {
            summary: 'Obtém os dados parciais (por model) de um processo',
            tags: ['Process'],
            parameters: [
                { name: 'processId', in: 'path', required: true, schema: { type: 'string' } },
                { name: 'model', in: 'path', required: true, schema: { type: 'string', enum: ['Subject', 'Class', 'User', 'Professor_Enrollment', 'Student_Enrollment', 'School_Period'] } },
            ],
            responses: {
                200: { description: 'Dados do modelo retornados com sucesso' },
                400: { description: 'Model inválido ou parâmetros ausentes' },
                404: { description: 'Dados não encontrados' },
                500: { description: 'Erro interno do servidor' },
            },
        },
        delete: {
            summary: 'Deleta os dados parciais (por model) de um processo',
            tags: ['Process'],
            parameters: [
                { name: 'processId', in: 'path', required: true, schema: { type: 'string' } },
                { name: 'model', in: 'path', required: true, schema: { type: 'string', enum: ['Subject', 'Class', 'User', 'Professor_Enrollment', 'Student_Enrollment', 'School_Period'] } },
            ],
            responses: {
                200: { description: 'Dados deletados com sucesso' },
                400: { description: 'Model inválido ou parâmetros ausentes' },
                500: { description: 'Erro interno do servidor' },
            },
        },
    },
    /**
     * ProfessorEnrollment
     */
    "/professor-enrollment/batch": {
        "post": {
            "summary": "Cria múltiplas matrículas de professores",
            "tags": ["ProfessorEnrollment"],
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "required": ["processId", "data"],
                            "properties": {
                                "processId": { "type": "string" },
                                "data": {
                                    "type": "array",
                                    "items": { "$ref": "#/components/schemas/ProfessorEnrollmentDocument" }
                                }
                            }
                        }
                    }
                }
            },
            "responses": {
                "201": { "description": "Matrículas criadas com sucesso" },
                "400": { "description": "Campos ausentes ou inválidos" },
                "404": { "description": "Processo não encontrado" },
                "500": { "description": "Erro interno do servidor" }
            }
        }
    },
    "/professor-enrollment": {
        "post": {
            "summary": "Cria uma matrícula de professor",
            "tags": ["ProfessorEnrollment"],
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "required": ["processId", "data"],
                            "properties": {
                                "processId": { "type": "string" },
                                "data": { "$ref": "#/components/schemas/ProfessorEnrollmentDocument" }
                            }
                        }
                    }
                }
            },
            "responses": {
                "201": { "description": "Matrícula criada com sucesso" },
                "409": { "description": "Matrícula já existente" },
                "404": { "description": "Processo ou dados não encontrados" },
                "500": { "description": "Erro interno do servidor" }
            }
        },
        "get": {
            "summary": "Lista todas as matrículas de professores",
            "tags": ["ProfessorEnrollment"],
            "responses": {
                "200": { "description": "Lista de matrículas retornada com sucesso" },
                "500": { "description": "Erro interno do servidor" }
            }
        }
    },
    "/professor-enrollment/get-one/{id}": {
        "get": {
            "summary": "Obtém uma matrícula por ID (ou via query)",
            "tags": ["ProfessorEnrollment"],
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "required": false,
                    "schema": { "type": "string" }
                },
                {
                    "name": "processId",
                    "in": "query",
                    "required": false,
                    "schema": { "type": "string" }
                },
                {
                    "name": "subjectCode",
                    "in": "query",
                    "required": false,
                    "schema": { "type": "string" }
                },
                {
                    "name": "classCode",
                    "in": "query",
                    "required": false,
                    "schema": { "type": "string" }
                },
                {
                    "name": "professorEmail",
                    "in": "query",
                    "required": false,
                    "schema": { "type": "string" }
                },
                {
                    "name": "registrationNumber",
                    "in": "query",
                    "required": false,
                    "schema": { "type": "string" }
                }
            ],
            "responses": {
                "200": { "description": "Matrícula encontrada com sucesso" },
                "404": { "description": "Matrícula não encontrada" },
                "500": { "description": "Erro interno do servidor" }
            }
        }
    },
    "/professor-enrollment/{id}": {
        "put": {
            "summary": "Atualiza uma matrícula de professor",
            "tags": ["ProfessorEnrollment"],
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "required": true,
                    "schema": { "type": "string" }
                }
            ],
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "required": ["processId"],
                            "properties": {
                                "processId": { "type": "string" },
                                "subjectCode": { "type": "string" },
                                "classCode": { "type": "string" },
                                "professorEmail": { "type": "string" },
                                "registrationNumber": { "type": "string" }
                            }
                        }
                    }
                }
            },
            "responses": {
                "200": { "description": "Matrícula atualizada com sucesso" },
                "404": { "description": "Matrícula, usuário ou turma não encontrada" },
                "500": { "description": "Erro interno do servidor" }
            }
        },
        "delete": {
            "summary": "Deleta uma matrícula de professor",
            "tags": ["ProfessorEnrollment"],
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "required": true,
                    "schema": { "type": "string" }
                }
            ],
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "required": ["processId"],
                            "properties": {
                                "processId": { "type": "string" }
                            }
                        }
                    }
                }
            },
            "responses": {
                "200": { "description": "Matrícula deletada com sucesso" },
                "404": { "description": "Matrícula não encontrada" },
                "500": { "description": "Erro interno do servidor" }
            }
        }
    },
    /**
     * SchoolPeriod
     */
    "/school-period/batch": {
        "post": {
            "summary": "Cria múltiplos períodos escolares",
            "tags": ["SchoolPeriod"],
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "required": ["processId", "data"],
                            "properties": {
                                "processId": { "type": "string" },
                                "data": {
                                    "type": "array",
                                    "items": { "$ref": "#/components/schemas/SchoolPeriodInput" }
                                }
                            }
                        }
                    }
                }
            },
            "responses": {
                "201": { "description": "Períodos escolares criados com sucesso" },
                "400": { "description": "Parâmetros inválidos ou ausentes" },
                "404": { "description": "Processo não encontrado" },
                "500": { "description": "Erro interno do servidor" }
            }
        }
    },
    "/school-period": {
        "post": {
            "summary": "Cria um período escolar",
            "tags": ["SchoolPeriod"],
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "required": ["processId", "data"],
                            "properties": {
                                "processId": { "type": "string" },
                                "data": { "$ref": "#/components/schemas/SchoolPeriodDocument" }
                            }
                        }
                    }
                }
            },
            "responses": {
                "201": { "description": "Período escolar criado com sucesso" },
                "409": { "description": "Período já existente neste processo" },
                "404": { "description": "Processo não encontrado" },
                "500": { "description": "Erro interno do servidor" }
            }
        },
        "get": {
            "summary": "Lista todos os períodos escolares",
            "tags": ["SchoolPeriod"],
            "responses": {
                "200": { "description": "Lista de períodos escolares retornada com sucesso" },
                "500": { "description": "Erro interno do servidor" }
            }
        }
    },
    "/school-period/get-one/{id}": {
        "get": {
            "summary": "Obtém um período escolar por ID ou código",
            "tags": ["SchoolPeriod"],
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "required": false,
                    "schema": { "type": "string" }
                }
            ],
            "requestBody": {
                "required": false,
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "code": { "type": "string" },
                                "processId": { "type": "string" }
                            }
                        }
                    }
                }
            },
            "responses": {
                "200": { "description": "Período escolar encontrado com sucesso" },
                "404": { "description": "Período escolar não encontrado" },
                "500": { "description": "Erro interno do servidor" }
            }
        }
    },
    "/school-period/{id}": {
        "put": {
            "summary": "Atualiza um período escolar",
            "tags": ["SchoolPeriod"],
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "required": true,
                    "schema": { "type": "string" }
                }
            ],
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "required": ["processId"],
                            "properties": {
                                "processId": { "type": "string" },
                                "code": { "type": "string" },
                                "name": { "type": "string" },
                                "startDate": { "type": "string", "format": "date" },
                                "endDate": { "type": "string", "format": "date" }
                            }
                        }
                    }
                }
            },
            "responses": {
                "200": { "description": "Período escolar atualizado com sucesso" },
                "404": { "description": "Período escolar não encontrado" },
                "500": { "description": "Erro interno do servidor" }
            }
        }
    },
    "/school-period/destroy/{id}": {
        "delete": {
            "summary": "Deleta um período escolar por ID ou código",
            "tags": ["SchoolPeriod"],
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "required": false,
                    "schema": { "type": "string" }
                }
            ],
            "requestBody": {
                "required": false,
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "code": { "type": "string" },
                                "processId": { "type": "string" }
                            }
                        }
                    }
                }
            },
            "responses": {
                "200": { "description": "Período escolar deletado com sucesso" },
                "404": { "description": "Período escolar não encontrado" },
                "500": { "description": "Erro interno do servidor" }
            }
        }
    },
    /**
     * StudentEnrollment
     */
    "/student-enrollment/batch": {
        "post": {
            "summary": "Cadastrar vários vínculos de matrícula de aluno em lote",
            "tags": ["StudentEnrollment"],
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "required": ["processId", "data"],
                            "properties": {
                                "processId": { "type": "string" },
                                "data": {
                                    "type": "array",
                                    "items": { "$ref": "#/components/schemas/StudentEnrollmentDtoData" }
                                }
                            }
                        }
                    }
                }
            },
            "responses": {
                "201": { "description": "Matrículas cadastradas com sucesso" },
                "400": { "description": "Dados inválidos" },
                "404": { "description": "Processo ou entidade relacionada não encontrada" },
                "500": { "description": "Erro interno do servidor" }
            }
        }
    },
    "/student-enrollment": {
        "post": {
            "summary": "Cadastrar uma matrícula de aluno",
            "tags": ["StudentEnrollment"],
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "required": ["processId", "data"],
                            "properties": {
                                "processId": { "type": "string" },
                                "data": { "$ref": "#/components/schemas/StudentEnrollmentDtoData" }
                            }
                        }
                    }
                }
            },
            "responses": {
                "201": { "description": "Matrícula cadastrada com sucesso" },
                "404": { "description": "Processo ou entidade relacionada não encontrada" },
                "409": { "description": "Matrícula já existe" },
                "500": { "description": "Erro interno do servidor" }
            }
        },
        "get": {
            "summary": "Listar todas as matrículas",
            "tags": ["StudentEnrollment"],
            "responses": {
                "200": { "description": "Lista de matrículas" },
                "500": { "description": "Erro interno do servidor" }
            }
        }
    },
    "/student-enrollment/get-one/{id}": {
        "get": {
            "summary": "Buscar matrícula de aluno por ID (ou outros critérios via body)",
            "tags": ["StudentEnrollment"],
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "required": false,
                    "schema": { "type": "string" }
                }
            ],
            "requestBody": {
                "required": false,
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "processId": { "type": "string" },
                                "subjectCode": { "type": "string" },
                                "classCode": { "type": "string" },
                                "studentEmail": { "type": "string" },
                                "registrationNumber": { "type": "string" }
                            }
                        }
                    }
                }
            },
            "responses": {
                "200": { "description": "Matrícula encontrada" },
                "404": { "description": "Matrícula não encontrada" },
                "500": { "description": "Erro interno do servidor" }
            }
        }
    },
    "/student-enrollment/{id}": {
        "put": {
            "summary": "Atualizar matrícula de aluno",
            "tags": ["StudentEnrollment"],
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "required": true,
                    "schema": { "type": "string" }
                }
            ],
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "processId": { "type": "string" },
                                "subjectCode": { "type": "string" },
                                "classCode": { "type": "string" },
                                "studentEmail": { "type": "string" },
                                "registrationNumber": { "type": "string" }
                            }
                        }
                    }
                }
            },
            "responses": {
                "200": { "description": "Matrícula atualizada com sucesso" },
                "404": { "description": "Matrícula ou entidade relacionada não encontrada" },
                "500": { "description": "Erro interno do servidor" }
            }
        },
        "delete": {
            "summary": "Remover matrícula de aluno",
            "tags": ["StudentEnrollment"],
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "required": true,
                    "schema": { "type": "string" }
                }
            ],
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "processId": { "type": "string" }
                            }
                        }
                    }
                }
            },
            "responses": {
                "200": { "description": "Matrícula removida com sucesso" },
                "404": { "description": "Matrícula não encontrada" },
                "500": { "description": "Erro interno do servidor" }
            }
        }
    },
    /**
     * Subject
     */
    "/subject/batch": {
        "post": {
            "summary": "Cadastrar várias disciplinas em lote",
            "tags": ["Subject"],
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "required": ["processId", "data"],
                            "properties": {
                                "processId": { "type": "string" },
                                "data": {
                                    "type": "array",
                                    "items": { "$ref": "#/components/schemas/SubjectDtoData" }
                                }
                            }
                        }
                    }
                }
            },
            "responses": {
                "201": { "description": "Disciplinas cadastradas com sucesso" },
                "400": { "description": "Dados inválidos" },
                "404": { "description": "Processo ou período não encontrado" },
                "500": { "description": "Erro interno do servidor" }
            }
        }
    },
    "/subject": {
        "post": {
            "summary": "Cadastrar uma disciplina",
            "tags": ["Subject"],
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "required": ["processId", "data"],
                            "properties": {
                                "processId": { "type": "string" },
                                "data": { "$ref": "#/components/schemas/SubjectDtoData" }
                            }
                        }
                    }
                }
            },
            "responses": {
                "201": { "description": "Disciplina cadastrada com sucesso" },
                "409": { "description": "Disciplina já existe no processo" },
                "404": { "description": "Processo ou período não encontrado" },
                "500": { "description": "Erro interno do servidor" }
            }
        },
        "get": {
            "summary": "Listar todas as disciplinas",
            "tags": ["Subject"],
            "responses": {
                "200": { "description": "Lista de disciplinas" },
                "500": { "description": "Erro interno do servidor" }
            }
        }
    },
    "/subject/get-one/{id}": {
        "get": {
            "summary": "Buscar disciplina por ID ou código",
            "tags": ["Subject"],
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "required": false,
                    "schema": { "type": "string" }
                }
            ],
            "requestBody": {
                "required": false,
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "processId": { "type": "string" },
                                "code": { "type": "string" }
                            }
                        }
                    }
                }
            },
            "responses": {
                "200": { "description": "Disciplina encontrada" },
                "404": { "description": "Disciplina não encontrada" },
                "500": { "description": "Erro interno do servidor" }
            }
        }
    },
    "/subject/{id}": {
        "put": {
            "summary": "Atualizar uma disciplina",
            "tags": ["Subject"],
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "required": true,
                    "schema": { "type": "string" }
                }
            ],
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "required": ["processId"],
                            "properties": {
                                "processId": { "type": "string" },
                                "periodId": { "type": "string" }
                            },
                            "additionalProperties": true
                        }
                    }
                }
            },
            "responses": {
                "200": { "description": "Disciplina atualizada com sucesso" },
                "404": { "description": "Disciplina ou período não encontrado" },
                "500": { "description": "Erro interno do servidor" }
            }
        }
    },
    "/subject/destroy/{id}": {
        "delete": {
            "summary": "Remover uma disciplina",
            "tags": ["Subject"],
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "required": false,
                    "schema": { "type": "string" }
                }
            ],
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "required": ["processId"],
                            "properties": {
                                "processId": { "type": "string" }
                            }
                        }
                    }
                }
            },
            "responses": {
                "200": { "description": "Disciplina removida com sucesso" },
                "404": { "description": "Disciplina não encontrada" },
                "500": { "description": "Erro interno do servidor" }
            }
        }
    }
};
//# sourceMappingURL=swaggerPaths.js.map