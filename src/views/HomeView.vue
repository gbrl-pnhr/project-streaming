<script lang="ts">
import { Streaming } from '@/models/streaming.model';
import { StreamingService } from '../views/streaming.service';
import { QueryParams } from '@/models/query.model';

export default {
  data() {
    return {
      allStreamings: [] as Streaming[],
      query: new QueryParams(),
    };
  },
  mounted() {
    this.getAllStreamings(this.query);    
  },
  methods: {
    getAllStreamings(query: QueryParams): void {
      this.service.getAllStreamings(query); 
      this.service.streamings.subscribe({
        next: (response) => {
          this.allStreamings = response.results;
          console.log(response.results);
        }
      });
    },
  },
  computed: {
    service(): StreamingService {
      return new StreamingService();
    }
  }
}
</script>

<template>
  <main>
    <div>
      <page-structure :streamingPosters="allStreamings"/>
    </div>
  </main>
</template>
