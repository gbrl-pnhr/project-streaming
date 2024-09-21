<script lang="ts">
import { Streaming } from '@/models/streaming.model';
import { StreamingService } from '../streaming.service';
import { QueryParams } from '@/models/query-params.model';

    export default {
        data() {
            return {
                allStramings: new Array<Streaming>(),
                query: new QueryParams()
            }
        },
        mounted() {
            this.getAllStreamings(this.query);
        },
        methods: {
            getAllStreamings(query: QueryParams): void {
                this.service.streamings.pipe().subscribe({
                    next: (response) => {
                        this.allStramings = response;
                    }
                });
                this.service.getAllStreamings(query);
            }

        },
        computed: {
            service(): StreamingService {
                return new StreamingService();
            }
        }
    }
</script>
<template>

</template>