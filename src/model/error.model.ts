import { HttpStatus } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

/**
 * https://www.rfc-editor.org/rfc/rfc7807
 */
export class Error {
    @ApiProperty()
    status: HttpStatus;

    @ApiProperty()
    type: string;

    @ApiPropertyOptional()
    title: string;

    @ApiPropertyOptional()
    detail: string;

    @ApiPropertyOptional()
    instance: string;
}
