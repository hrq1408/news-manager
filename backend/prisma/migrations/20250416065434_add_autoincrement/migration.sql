-- CreateTable
CREATE TABLE `Noticia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `subtitulo` TEXT NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `imagem` VARCHAR(191) NOT NULL,
    `editoria` VARCHAR(191) NOT NULL,
    `data_hora_publicacao` DATETIME(3) NOT NULL,
    `conteudo` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
