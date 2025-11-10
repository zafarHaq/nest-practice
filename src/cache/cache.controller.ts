import { Body, Controller, Post } from '@nestjs/common';
import axios from 'axios';

@Controller('cache')
export class CacheController {
  private zoneId = "a7c9302995d01005284bc9ed2c5d1587";
  private apiToken = "DL5V5shQzTUskVZuLCaEe3k0Cf4qELvs5BnU6baN";

  @Post('purge')
  async purgeCache(@Body() body: { tag?: string }) {
    const url = `https://api.cloudflare.com/client/v4/zones/${this.zoneId}/purge_cache`;

    const payload = body.tag
      ? { tags: [body.tag] }
      : { purge_everything: true };

    const res = await axios.post(url, payload, {
      headers: {
        Authorization: `Bearer ${this.apiToken}`,
        'Content-Type': 'application/json',
      },
    });

    return res.data;
  }
}
